import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const workspace_id = searchParams.get('workspace_id');
    sql`DELETE FROM tasks WHERE id=${id}`

    redirect(`/workspace/${workspace_id}`);
    // return Response.json({ id }); 
}