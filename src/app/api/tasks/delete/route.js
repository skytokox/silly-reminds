import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    sql`DELETE FROM workspaces WHERE id=${id}`

    redirect('/');
    return Response.json({ id }); 
}