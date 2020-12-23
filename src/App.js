import React,{useState} from 'react'
import './App.css';

function App() {
  const[tasks, setTasks] = useState([])
  const [userInput, setUserInput] = useState("")

  //taking user input value
  const handleChange = (event) =>{
    setUserInput(event.target.value)
  }
 
  //adding uservalue to the list
  function addTask(){
    const taskValue = [...tasks, {
      id: tasks.length,
      value : userInput
    }]
    setTasks(taskValue)
    setUserInput("")
  }

  //delete the task
  function deleteTask(index){
    const taskvalueDelete = [...tasks]
     taskvalueDelete.splice(index, 1)
     setTasks(taskvalueDelete)
  }

  //deleting all the tasks
  function deleteAll(){
    setTasks([])
  }

  return (
    <div className="App">

      <h1>ToDo List</h1>
      <h2>Current Todo's to Do : {tasks.length} {""}
      <button onClick={deleteAll}>Delete All</button></h2> 
     
      <div>
     
        {tasks.map((task, index)=>(
          <ul style={{listStyleType:"none"}}> 
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
