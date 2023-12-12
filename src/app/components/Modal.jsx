import React from 'react'
import CreateForm from '../create/CreateForm'

export default function Modal({ setModalActive }) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <CreateForm />
            <button onClick={() => setModalActive(false)}>Close</button>
        </div>
    </div>
  )
}
