"use client"
import React from 'react'
import Link from "next/link"
import useSWR from 'swr';
import { useState } from 'react';
import Modal from 'src/app/components/Modal';


const fetcher = (url) => fetch(url).then((res) => res.json());

function GetWorkspace(id) {
  const { data, isLoading } = useSWR(`/api/workspaces/getById/${id}`,
    fetcher)
  if (!isLoading) {
    return data;
  }
}
function GetTasks(id) {
  const { data, isLoading } = useSWR(`/api/tasks/getByWorkspaceId/${id}`,
    fetcher)
  if (!isLoading) {
    return data;
  }
}


export default function Page({ params }) {
  const id = params.id;
  const data = GetWorkspace(id);
  const tasks = GetTasks(id);

  const [modalActive, setModalActive] = useState(false);


  if (!data || !tasks) {
    return "loading..."
  }
  
  const { name } = data;
  const isEmpty = tasks == "" ? true : false
  return (
    <main className='workspace-page'>
      <h2 className='text-3xl'>Workspace: {name}</h2>
      <div className='control-buttons'>
        <button className='btn-add' onClick={() => setModalActive(true)}>Add task</button>
      </div>
      <div className='tasks'>
        {isEmpty ? "brak zadan" : tasks.map((task) => (
          <div className='task' key={task.id}>
            <Link key={task.id} href={`/api/tasks/delete?id=${task.id}&workspace_id=${id}`}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
            </Link>
          </div>
        ))}
      </div>
      {modalActive && (<Modal setModalActive={setModalActive} id={id} mode={'task'}/>)}
      <br /> <br />
    </main>
  )
}
