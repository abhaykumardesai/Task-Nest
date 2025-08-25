import React from 'react'
import ToDo from './ToDo'
import OnGoing from './OnGoing'
import Completed from './Completed'
import './style.css'

export default function Home() {

    






  return (
    <>
      <h1 style={{ textAlign: "center" }}>TaskBuddy</h1>
      <div className="input-section">
        <input placeholder="Enter your task" type="text" />
        <button className='add-task-button'>Add Task</button>
      </div>
      <div className="task-container">
        <ToDo />
        <OnGoing />
        <Completed />
      </div>
    </>
  )
}
