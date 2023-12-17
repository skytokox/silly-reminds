"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import useSWR from "swr"


export default function LoadWorkspaces() {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading} = useSWR(
        "/api/workspaces/get",
        fetcher
    )

    if(isLoading) {
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
