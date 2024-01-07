import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { cache } from 'react';

export const revalidate = 0;

const getWorkspaces = async (user_id) => {
  const result = await sql`SELECT * FROM workspaces WHERE ${user_id} = ANY (users) `;
  const { rows } = result;
  return rows;
}


export async function GET(request, { params }) {
  // try {
  //   const rows = await getWorkspaces();
  //   return NextResponse.json({ rows }, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }
  const user_id = params.user_id;
  const rows = await getWorkspaces(user_id);
  return NextResponse.json({ rows })
}
