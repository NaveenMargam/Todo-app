import {useState} from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [taskName, setTaskName] = useState('')
  const [time, setTime] = useState('')
  const [taskList, setTaskList] = useState([])
 
  const addHandler = () => {
    setTaskList([...taskList,{task:taskName,time:time}])
    setTaskName('')
    setTime('')
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
    
      <input type="text" id='task' placeholder="enter task" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
     
      <input type="text" id='time' placeholder="enter time" value={time} onChange={(e)=>setTime(e.target.value)}/>

      <button onClick={addHandler}>Add</button>
      {taskList.map((task,index)=> <Task id={index} taskName={task.task} time={task.time} taskList={taskList} setTaskList={setTaskList} />)}
      
    </div>
  );
}

export default App;
