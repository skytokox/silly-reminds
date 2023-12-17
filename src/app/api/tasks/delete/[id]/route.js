import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';
import { NextResponse } from "next/server";

export const revalidate = 0;



export async function GET(request, { params }) {
    const id = params.id;
    sql`DELETE FROM tasks WHERE id=${id}`;    
    redirect('/')
    return NextResponse.json(id); 
}