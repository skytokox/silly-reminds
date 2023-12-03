import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const id = searchParams.get('id');
    sql`INSERT INTO tasks(name, workspace_id) VALUES (${name}, ${id})`;
    redirect(`/`);
    // return Response.json( {name} ); 
}