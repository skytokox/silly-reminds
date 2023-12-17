import React from 'react'
import CreateForm from '../create/CreateForm'
import CreateTask from './CreateTask'

export default function Modal({ setModalActive, mode, id }) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            {mode == 'workspace' ? <CreateForm /> : ""}
            {mode == 'task' ? <CreateTask id={id}/> : ""}
            <button onClick={() => setModalActive(false)}>Close</button>
        </div>
    </div>
  )
}
