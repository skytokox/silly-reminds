"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"
import styles from './page.module.css'
import { getWorkspaces } from "../api/workspaces/get/route";

export default function CreateForm() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [workspace, setWorkspace] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const group = {
      "title": workspace,
      "tasks": [
        {
          "id": 1,
          "title": title
        }
      ]
    }

    const res = await fetch('http://localhost:4000/groups', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(group)
    })

    if(res.status == 201) {
      router.refresh();
      router.push('/');
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span>Title: </span>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label> <br/>
        <label>
          <span>Workspace: </span>
          <select>
            <option value="school">school</option>
          </select>
        </label> <br/>
        <button>Add task</button>
      </form>
    </main>
  )
}
