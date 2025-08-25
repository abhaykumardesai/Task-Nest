import React, { useState, useEffect } from 'react'
import ToDo from './ToDo'
import OnGoing from './OnGoing'
import Completed from './Completed'
import './style.css'

export default function Home() {
  const [allTasks, setAllTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState("");


  const inputHandle = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setAllTasks(prevTasks => [...prevTasks, task]);
      setTask("");
    } else {
      alert("Please enter a valid task");
    }
  };

  useEffect(() => {
    console.log(allTasks);
  }, [allTasks]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>TaskNest</h1>
      <form onSubmit={addTask} className="input-section">
        <input 
          value={task}
          onChange={inputHandle} 
          placeholder="Enter your task" 
          type="text" 
        />
        <button type='button' onClick={addTask} className='add-task-button' disabled={!task.trim()}>Add Task</button>

      </form>
      <div className="task-container">
        <ToDo 
          list={allTasks} 
          moveToOngoing={(index) => {
            const task = allTasks[index];
            setOngoingTasks(prev => [...prev, task]);
            setAllTasks(prev => prev.filter((_, i) => i !== index));
          }}
          completedTasks={(index) => {
            const task = allTasks[index];
            setCompletedTasks(prev => [...prev, task]);
            setAllTasks(prev => prev.filter((_, i) => i !== index));
          }} 
        />
        <OnGoing list={ongoingTasks}
        moveToDo={(index) => {
          const task = ongoingTasks[index];
          setAllTasks(prev => [...prev, task]);
          setOngoingTasks(prev => prev.filter((_, i) => i !== index));
        }}
        completedTasks={(index) => {
          const task = ongoingTasks[index];
          setCompletedTasks(prev => [...prev, task]);
          setOngoingTasks(prev => prev.filter((_, i) => i !== index));
        }} 
        />
        <Completed list={completedTasks}
        moveToDo={(index) => {
          const task = completedTasks[index];
          setAllTasks(prev => [...prev, task]);
          setCompletedTasks(prev => prev.filter((_, i) => i !== index));
        }}
          moveToOngoing={(index) => {
            const task = completedTasks[index];
            setOngoingTasks(prev => [...prev, task]);
            setCompletedTasks(prev => prev.filter((_, i) => i !== index));
          }}
        />
      </div>
    </>
  )
}