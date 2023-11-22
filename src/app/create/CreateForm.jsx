"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"
import styles from './page.module.css'
import { getWorkspaces } from "../api/workspaces/get/route";
import { sql } from "@vercel/postgres";

export default function CreateForm() {

  const router = useRouter();

  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    // e.preventDefault();

    const group = {
      "name": name,
    }

    // const res = await fetch('http://localhost:3000/api/workspaces/add', {
    //   method: 'POST',
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(group)
    // })

    // if(res.status == 201) {
    //   router.refresh();
    //   router.push('/');
    // }
    // console.log(res);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} action="https://silly-reminds.vercel.app/api/workspaces/add">
        <label className={styles.label}>
          <span>Name: </span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
          />
        </label> <br/>
        <button>Add workspace</button>
      </form>
    </main>
  )
}
