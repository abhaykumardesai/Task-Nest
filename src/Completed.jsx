import './style.css';

export default function Completed() {
  return (
    <div className="task-column completed">
      <h3>Completed</h3>
      <ul className="task-list">
        <li>
          <h4>Set up React project</h4>
          <div className='button-container'>
            <button className='move btn-start'><span className="material-symbols-outlined">replay</span></button>
            <button className='move btn-complete'><span className="material-symbols-outlined">play_arrow</span></button>
          </div>
        </li>
        <li>
          <h4>Initialize Git repository</h4>
          <div className='button-container'>
            <button className='move btn-start'><span className="material-symbols-outlined">replay</span></button>
            <button className='move btn-complete'><span className="material-symbols-outlined">play_arrow</span></button>
          </div>
        </li>
      </ul>
    </div>
  );
}