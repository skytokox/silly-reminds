"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"
import styles from './page.module.css'
import { getWorkspaces } from "../api/workspaces/get/route";
import { sql } from "@vercel/postgres";

export default function CreateForm() {


  const [name, setName] = useState("");

  return (
      <form action={`/api/workspaces/add`} className="add-form">
        <h2>Add Workspace</h2>
        <br />
        <label>
          <span>Name: </span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
          />
        </label> <br/>
        <label>
          <span>Code: </span>
          <input
            required
            type="password"
            name="code"
          />
        </label> <br/>
        <button>Add</button>
      </form>
  )
}
