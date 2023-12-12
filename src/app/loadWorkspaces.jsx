"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import useSWR from "swr"

// async function getWorkspaces() {
//     const res = await fetch('http://localhost:3000/api/workspaces/get', { 
//         cache: 'no-cache'
//     })
//     return res.json();
// }
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function LoadWorkspaces() {
    // const data = await getWorkspaces();
    const { data, error, isLoading} = useSWR(
        "https://silly-reminds.vercel.app/api/workspaces/get",
        fetcher
    )
    // console.log(data.rows)
    // console.log({ rows } = data)
    // console.log(data.rows)
    if(!data) {
        return "loading...";
    }
    const rows = data.rows;
    return (
        <>
        {rows.map((workspace) => (
            <Link key={workspace.id} href={`/workspace/${workspace.id}`}>
                <div key={workspace.id} className="workspace">
                    <h3>{workspace.name}</h3>
                </div>
            </Link>
            ))}
        </>
    )
}
