import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    sql`INSERT INTO workspaces(name) VALUES (${name})`
    redirect('/');
    // return Response.json( {name} ); 
}