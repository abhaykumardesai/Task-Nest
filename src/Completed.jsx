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
                  title="Restart Task" 
                  onClick={() => moveToDo(index)} 
                  className='move btn-start'>
                  <span className="material-symbols-outlined">replay</span>
                </button>
                <button 
                  title="Resume Task" 
                  onClick={() => moveToOngoing(index)} 
                  className='move btn-complete'>
                  <span className="material-symbols-outlined">play_arrow</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
