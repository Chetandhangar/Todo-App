import React,{useState} from 'react'
import './App.css';

function App() {
  const[tasks, setTasks] = useState([])
  const [userInput, setUserInput] = useState("")

  const handleChange = (event) =>{
    setUserInput(event.target.value)
  }
 
  
  function addTask(){
    const taskValue = [...tasks, {
      id: tasks.length,
      value : userInput
    }]
    setTasks(taskValue)
    setUserInput("")
  }

  return (
    <div className="App">

      <h1>ToDo List</h1>
     
      <div>
     
        {tasks.map(task=>(
          <ul> 
            <li key={task.id}>
              {task.value}
            </li>
          </ul>
        ))}

<button onClick={addTask}>Add a Taks to list</button>
<input onChange={handleChange}  value={userInput}/>
      </div>
     
     
    </div>
  );
}

export default App;
