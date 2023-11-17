import React from 'react'
import styles from './page.module.css'

async function getGroups() {
    const res = await fetch('http://localhost:3000/api/test', {
        next: {
            revalidate: 0
        }
    });
    return res.json();
}


export default async function loadGroups() {
    const groups = await getGroups();
    return (
        <>
        {groups.map((group) => (
                <div key={group.id} className="workspace">
                    <h3>{group.title}</h3>
                    <div>
                        {group.tasks.map((task) => (
                            <div key={task.id}>{task.title}</div>
                        ))}
                    </div>
                </div>
            ))}
        </>
        // {groups}
    )
}
