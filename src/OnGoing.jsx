import './style.css';

export default function OnGoing({ list, moveToDo, completedTasks }) {
  return (
    <div className="task-column on-going">
      <h3>On Going</h3>
      {list.length === 0 ? (
        <p className="empty-msg">No running tasks. Start a task from the To Do list!</p>
      ) : (
        <ul className="task-list">
          {list.map((task, index) => (
            <li key={index}>
              <h4>{task}</h4>
              <div className='button-container'>
                <button 
                  onClick={() => moveToDo(index)} 
                  className='move btn-start'>
                  <span className="material-symbols-outlined">replay</span>
                  <span className="btn-label">Reset</span>
                </button>
                <button 
                  onClick={() => completedTasks(index)} 
                  className='move btn-complete'>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span className="btn-label">Finish</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
