import Image from 'next/image'
import styles from './page.module.css'
import LoadTasks from './loadTasks'

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>SillyReminds</h1>
        <div className={styles.workspaces}>
          <LoadTasks />
        </div>
    </main>
  )
}
