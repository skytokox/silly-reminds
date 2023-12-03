import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres"

export const revalidate = 0;

export const getWorkspace = async (id) => {
    const result = await sql`SELECT name FROM workspaces WHERE id=${id}`;
    const { rows } = result;
    return rows[0];
}


export async function GET(request, { params }) {
    const id = params.id;
    const data = await getWorkspace(id);
    const { name } = data;
    // const name = data.name;
    // try {
    //     const data = await getWorkspace(id);
    //     return NextResponse.json( { data } , { status: 200 }); 
    // }catch (error) {
    //     return NextResponse.json({ error }, { status: 500})
    // }
    return NextResponse.json( {name} );
}