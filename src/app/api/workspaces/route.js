import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request) {
    try {
        const result =
          await sql`SELECT * FROM workspaces`;
        const { rows } = result;
        return NextResponse.json({ rows }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
}
