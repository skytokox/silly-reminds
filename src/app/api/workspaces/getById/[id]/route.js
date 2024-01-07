import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres"

export const revalidate = 0;

const getWorkspace = async (id) => {
    const result = await sql`SELECT name FROM workspaces WHERE id=${id}`;
    const { rows } = result;
    return rows[0];
}


export async function GET(request, { params }) {
    const id = params.id;
    const data = await getWorkspace(id);
    const { name } = data;
    return NextResponse.json( {name} );
}