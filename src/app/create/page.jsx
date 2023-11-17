import React from 'react'
import CreateForm from './CreateForm'
import styles from './page.module.css'
export default function Create() {
  return (
    <main className={styles.main}>
        <h2>Dodaj nowe zadanie</h2>
        <CreateForm />
    </main>
  )
}
