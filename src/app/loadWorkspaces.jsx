import React from 'react'
import styles from './page.module.css'

async function getWorkspaces() {
    const res = await fetch('http://localhost:3000/api/workspaces', {
        next: {
            revalidate: 0
        }
    });
    return res.json();
}


export default async function loadWorkspaces() {
    const workspaces = await getWorkspaces();
    const { rows } = workspaces;
    return (
        <>
        {rows.map((workspace) => (
                <div key={workspace.id} className="workspace">
                    <h3>{workspace.name}</h3>
                </div>
            ))}
        </>
        // {groups}
    )
}
