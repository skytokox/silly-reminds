import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const id = searchParams.get('id');
    const code = searchParams.get('code');
    const desc = searchParams.get('desc')
    if(code == 'brunoadmin') {
        sql`INSERT INTO tasks(name, workspace_id, description) VALUES (${name}, ${id}, ${desc})`;
    }
    redirect(`/workspace/${id}`);
}