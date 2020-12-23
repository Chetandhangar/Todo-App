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

  function deleteTask(index){
    const taskvalueDelete = [...tasks]
     taskvalueDelete.splice(index, 1)
     setTasks(taskvalueDelete)
  
    
  }

  return (
    <div className="App">

      <h1>ToDo List</h1>
      <h2>Current Todo's to Do : {tasks.length}</h2>
     
      <div>
     
        {tasks.map((task, index)=>(
          <ul> 
            <li key={index}>
              {task.value} <button onClick={()=>deleteTask(index)}>Delete Task</button>
            </li>
            
          </ul>
        ))}
        <input onChange={handleChange}  value={userInput}/>
        <button onClick={addTask}>Add a Taks to list</button>
      </div>
     
     
    </div>
  );
}

export default App;
