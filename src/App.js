import { useState } from "react"
import './App.css';
import Header from "./Header"
import data from "./data.json"
import ToDoList from "./ToDoList";

function App() {
    const [toDoList, setToDoList] = useState(data)

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === id ? { ...task, complete: !task.complete } : task.complete
        })
        setToDoList(mapped)
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete
        })
        setToDoList(filtered)
    }


    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} />
        </div>
    );
}

export default App;
