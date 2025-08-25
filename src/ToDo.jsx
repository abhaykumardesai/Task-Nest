import './style.css';

export default function ToDo() {
  return (
    <div className="task-column to-do">
      <h3>To Do</h3>
      <ul className="task-list">
        <li>
          <h4>Plan project structure</h4>
          <div className='button-container'>
            <button className='move btn-start'><span className="material-symbols-outlined">play_arrow</span></button>
            <button className='move btn-complete'><span className="material-symbols-outlined">check_circle</span></button>
          </div>
        </li>
        <li>
          <h4>Create component files</h4>
          <div className='button-container'>
            <button className='move btn-start'><span className="material-symbols-outlined">play_arrow</span></button>
            <button className='move btn-complete'><span className="material-symbols-outlined">check_circle</span></button>
          </div>
        </li>
      </ul>
    </div>
  );
}