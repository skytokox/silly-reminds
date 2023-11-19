`use client`
import React from 'react'
import styles from './page.module.css'
// import { getWorkspaces } from './api/workspaces/get/route.js'

async function getWorkspaces() {
    // const res = await fetch('http://localhost:3000/api/workspaces/get', { cache: 'no-store'});
    // const res = await fetch(`http://${process.env.VERCEL_URL}/api/workspaces/get`, { cache: 'no-store'});
    console.log(process.env.VERCEL_URL);
    return res.json();
}


export default async function loadWorkspaces() {
    const data = await getWorkspaces();
    const { rows } = data;
    console.log(rows);
    
    return (
        <>
        {rows.map((workspace) => (
                <div key={workspace.id} className="workspace">
                    <h3>{workspace.name}</h3>
                </div>
            ))}
        </>
    )
}
