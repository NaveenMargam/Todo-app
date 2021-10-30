import React from 'react'
import {AiFillDelete} from "react-icons/ai";

const Task = ({id,taskName,time,taskList,setTaskList}) => {
    const deleteHandler = () => {
        
         setTaskList(taskList.filter((value)=> value!==taskList[id]))
    }
    
    return (
        <div className='task'>
            <div className='list'>
                    <li>task order: {id} </li>
                    <li>Taskname: {taskName}</li>
                    <li>Time to complete: {time}</li>
              
            </div>
            <button className='btn' onClick={deleteHandler}><AiFillDelete size="10px"/></button>
            
        </div>
    )
}

export default Task;
