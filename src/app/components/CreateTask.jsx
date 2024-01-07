"use client"


export default function CreateTask({ id }) {
  return (
      <form action={`/api/tasks/add`} className="add-form">
        <h2>Add Task</h2>
        <br />
        <label>
          <span>Name: </span> <br/>
          <input
            required
            type="text"
            name="name"
          />
        </label> <br/>
        <label>
          <span>Description: </span>  <br/>
          <input
            required
            type="text"
            name="desc"
          />
        </label> <br/>
        <input type="hidden" name="id" value={id} />
        <button>Add</button>
      </form>
  )
}
