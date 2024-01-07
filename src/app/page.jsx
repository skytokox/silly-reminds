"use client"
import styles from './page.module.css'
import LoadWorkspaces from './loadWorkspaces'
import AddGroup from './components/AddGroup'
import Modal from './components/Modal';
import { useState } from 'react';
import { useSession } from "next-auth/react";


export default function Home() {

  const [modalActive, setModalActive] = useState(false);

  const { data: session, status } = useSession();
  
  if(status === 'loading') {
    return 'loading....';
  }

  // console.log(session);

  return (
    <main>
      <div className="groups">
        <h2>Your workspaces</h2>
        <div className="workspaces">
          <LoadWorkspaces />
          <AddGroup setModalActive={setModalActive}/>
          {modalActive && (<Modal setModalActive={setModalActive} mode={'workspace'}/>)}
        </div>
      </div>
    </main>
  )
}
