`use client`
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

async function getWorkspaces() {
    const res = await fetch('https://silly-reminds.vercel.app/api/workspaces/get', { cache: 'no-store'})
    return res.json();
}
export default async function loadWorkspaces() {
    const data = await getWorkspaces();
    const { rows } = data;
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
