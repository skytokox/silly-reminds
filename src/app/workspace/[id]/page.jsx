`use client`
import { revalidate } from '@/app/api/workspaces/get/route';
import React from 'react'
import Link from "next/link"

async function getWorkspace(id) {
  const res = await fetch(`https://silly-reminds.vercel.app/api/workspaces/getById/${id}`);
  return res.json();
}

async function getTasks(id) {
  const res = await fetch(`https://silly-reminds.vercel.app/api/tasks/getByWorkspaceId/${id}`, {
    next: { revalidate: 0 }
  });
  return res.json();
}


export default async function Page({ params }) {
  const id = params.id;
  const data = await getWorkspace(id);
  const tasks = await getTasks(id);
  const { name } = data;
  const isEmpty = tasks == "" ? true : false
  return (
    <main className='workspace-page'>
      <h2 className='text-2xl'>Workspace: {name}</h2>
      <div className="tasks">
        {isEmpty ? "brak zadan" : tasks.map((task) => (
          <Link key={task.id} href={`/api/tasks/delete?id=${task.id}`}>
            <div className='task' key={task.id}>
              {task.name}
            </div>
          </Link>
        ))}
      </div>
      <br /> <br />
      <form action={`/api/tasks/add`}>
        <label>
          <span>Name: </span>
          <input
            required
            type="text"
            name="name"
          />
        </label> <br />
        <input type="hidden" name="id" value={id} />
        <button>Add task</button>
      </form>
    </main>
  )
}
