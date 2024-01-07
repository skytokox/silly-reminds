"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"
import styles from './page.module.css'
import { getWorkspaces } from "../api/workspaces/get/[user_id]/route";
import { sql } from "@vercel/postgres";
import { useSession } from "next-auth/react";

export default function CreateForm() {

  const { data: session } = useSession();
  const router = useRouter();

  return session ? (
      <form action={`/api/workspaces/add`} className="add-form">
        <h2>Add Workspace</h2>
        <br />
        <label>
          <span>Name: </span>
          <input
            required
            type="text"
            name="name"
          />
        </label> <br/>
        <label>
          <input
            type="hidden"
            name="user_id"
            value={session.user.id}
          />
        </label> <br/>
        <button>Add</button>
      </form>
  ) : "You need to log in first!";
}
