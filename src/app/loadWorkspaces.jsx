import React from 'react'
import styles from './page.module.css'
import { getWorkspaces } from './api/workspaces/get/route.js'

// async function getWorkspaces() {
//     const res = await fetch('/api/workspaces/get', {
//         next: {
//             revalidate: 0
//         }
//     });
//     return res.json();
// }

// export async function getServerSideProps() {
//     const rows = await getData();
//     return { props: { rows } }
// }



export default async function loadWorkspaces() {
    const rows = await getWorkspaces();
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
