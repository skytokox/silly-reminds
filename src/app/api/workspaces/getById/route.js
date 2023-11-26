import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export const getWorkspaces = async (id) => {
    const result = await sql`SELECT name FROM tasks WHERE workspace_id=${id}`;
    const { rows } = result;
    return rows;
};


export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const data = await getWorkspaces(id)
    return Response.json({ data }); 
}