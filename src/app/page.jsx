`use client`
import styles from './page.module.css'
import LoadWorkspaces from './loadWorkspaces'



export default function Home() {
  return (
    <main>
      <div className="groups">
        <h2>Your workspaces</h2>
        <div className="workspaces">
          <LoadWorkspaces />
        </div>
      </div>
    </main>
  )
}
