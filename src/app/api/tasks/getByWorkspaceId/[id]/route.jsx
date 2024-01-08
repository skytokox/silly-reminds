import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';
import { NextResponse } from "next/server";

export const revalidate = 0;

const getTasks = async (id) => {
    const result = await sql`SELECT id, name, description FROM tasks WHERE workspace_id=${id}`;
    const { rows } = result;
    return rows;
};


export async function GET(request, { params }) {
    const id = params.id;
    const tasks = await getTasks(id)
    return NextResponse.json({ tasks }); 
}