import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { cache } from 'react';

export const revalidate = 0;

// export async function getWorkspaces() {
//   const result =
//     await sql`SELECT * FROM workspaces`;
//   const { rows } = result;
//   return rows;
// }
export const getWorkspaces = cache(async () => {
  const result = await sql`SELECT * FROM workspaces`;
  const { rows } = result;
  return rows;
})


export async function GET(request) {
  try {
    const rows = await getWorkspaces();
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
