import { sql } from "@vercel/postgres";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    return Response.json( {title} );
}