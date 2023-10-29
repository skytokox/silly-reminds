'use client';
const LoadTasks = () => {

    const data = [
        {
            'workspace': 'school',
            'tasks': ['math', 'polish', 'english', 'IT'],
            'id': 1  
        },
        {
            'workspace': 'work',
            'tasks': ['finish task', 'make coffe', 'clean up', 'make report'],
            'id': 2
        },
        {
            'workspace': 'fun',
            'tasks': ['watch FNAF movie', 'play DL2', 'make fun of macura'],
            'id': 3  
        }
    ];


    return (
        data.map((box) => (
            <div key={box.id}>
                <h2>{box.workspace}</h2>
                <ul>
                    {box.tasks.map((task) => (
                        <li onDoubleClick={(e) => e.target.style = 'text-decoration: line-through'}>{task}</li>
                    ))}
                </ul>
            </div>
        ))
    );
}
 
export default LoadTasks;