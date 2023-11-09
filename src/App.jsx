import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";



export default function App() {
  const [items, setItems] = useState([
    {
      task: "Buy Milk",
      completed: false,
      id: 1,
  },
    {
      task: "sell Milk",
      completed: true,
      id: 2,
  }
]);
function addItem(newItem) {
  setItems((oldState) => oldState.concat(newItem));
}

function deleteItem(id) {
  setItems((oldState) => oldState.filter((item) => item.id !== id));
}
function toggleCompleted(id) {
  console.log(id, "skal ændres");
  setItems((old) => {
    return old.map((item) => {
      if(item.id === id) {
        const copy = {...item}
        copy.completed = !copy.completed;
        return copy;
      }
      return item;
    });
  });
}
    return (
        <div>
            <h1>React App</h1>
            <Form addItem={addItem}/>
            <List toggleCompleted={toggleCompleted} items={items} deleteItem={deleteItem}/>
        </div>
    )
}