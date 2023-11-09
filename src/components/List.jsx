import Listitem from "./Listitem";

export default function List({ items, deleteItem, toggleCompleted }) {
    return (
        <>
            <h2>Todo List</h2>
            <h3>Udfør Opgaver</h3>
            <ul>
                {items
                .filter ((i) => !i.completed)
                .map((item) => (
                    <Listitem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item} />
                ))}
            </ul>
            <h3>Færdige Opgaver</h3>
            <ul>
                {items
                .filter ((i) => i.completed)
                .map((item) => (
                    <Listitem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item} />
                ))}
            </ul>
        </>
    )
}