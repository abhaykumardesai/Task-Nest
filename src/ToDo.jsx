import './style.css';

export default function ToDo({ list, moveToOngoing, completedTasks }) {

  return (
    <div className="task-column to-do">
      <h3>To Do</h3>
        {list.length === 0 ? (
          <p className="empty-msg">No tasks here. Add a task to get started!</p>
        ) : (
          <ul className="task-list">
            {list.map((task, index) => (
              <li key={index}>
                <h4>{task}</h4>
                <div className='button-container'>
                  <button 
                    title="Start Task" 
                    onClick={() => moveToOngoing(index)} 
                    className='move btn-start'>
                    <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                  <button 
                    title="Mark as Done" 
                    onClick={() => completedTasks(index)} 
                    className='move btn-complete'>
                    <span className="material-symbols-outlined">check_circle</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}