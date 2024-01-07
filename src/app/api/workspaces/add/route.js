import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const id = [searchParams.get('user_id')];

    sql`INSERT INTO workspaces(name, users) VALUES (${name}, ${id})`
    redirect('/');
}