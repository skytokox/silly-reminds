import { sql } from "@vercel/postgres";
import { redirect } from "next/dist/server/api-utils";
const bcrypt = require('bcrypt');

export async function POST(request) {
    const { searchParams } = new URL(request.url);
    // const login = searchParams.get('name');

    const data = await request.json();
    const { username, email, pass } = data;
    console.log(data);
    const user = {'username': username, 'password': pass, 'email': email};
    console.log(user);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(user.password, salt);
    // console.log(hashedPass);
    // console.log(hashedPass.length);
    sql`INSERT INTO users(username, password, email) 
    VALUES (${user.username}, ${hashedPass}, ${user.email})`;
    // const data = await sql`SELECT user_id, username, email, password FROM users where user_id = 1`;
    // const { rows } = data;
    // const userf = {
    //     'user_id': rows[0].user_id,
    //     'username': rows[0].username,
    //     'email': rows[0].email, 
    //     'password': rows[0].password
    // };
    // console.log(rows);
    // console.log(JSON.parse(request.body));
    return Response.json("");
}