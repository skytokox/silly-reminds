import React from 'react'

async function geTasks() {
    const res = await fetch('https://silly-reminds.vercel.app/api/workspaces/get', { cache: 'no-store'})
    return res.json();
}


export default async function loadTasks() {

  return (
    <div>zadania cos ten</div>
  )
}
