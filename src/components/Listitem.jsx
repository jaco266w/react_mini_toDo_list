import styles from './Listitem.module.css';

export default function Listitem({completed, task, id, deleteItem, toggleCompleted}) {
    function deleteThis() {
        deleteItem(id);
    }
    return (
        <li className={completed ? styles.completed : styles.not}>
            <p>{task}</p>
            <button onClick={() => toggleCompleted(id)} className="w-max">
                {completed ? "Completed" : "Not Completed"}
            </button>
            <button onClick={deleteThis} className="w-max">Delete</button>
        </li>
    )
}