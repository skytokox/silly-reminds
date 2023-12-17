import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const code = searchParams.get('code');
    if(code == 'brunoadmin') {
        sql`INSERT INTO workspaces(name) VALUES (${name})`
    }
    redirect('/');
}