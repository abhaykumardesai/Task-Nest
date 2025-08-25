import './style.css';

export default function Completed({ list, moveToDo, moveToOngoing }) {
  return (
    <div className="task-column completed">
      <h3>Completed</h3>
      {list.length === 0 ? (
        <p className="empty-msg">No completed tasks yet. Complete a task to see it here!</p>
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
                  <span className="btn-label">Restart</span>
                </button>
                <button 
                  onClick={() => moveToOngoing(index)} 
                  className='move btn-complete'>
                  <span className="material-symbols-outlined">play_arrow</span>
                  <span className="btn-label">Resume</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
