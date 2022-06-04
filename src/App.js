import { useState } from "react"
import './App.css';
import Header from "./Header"
import data from "./data.json"
import ToDoList from "./ToDoList"
import ToDoListForm from "./ToDoListForm"

function App() {
    const [toDoList, setToDoList] = useState(data)

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : {...task}
        })
        setToDoList(mapped)
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete
        })
        setToDoList(filtered)
    }

    const addTask = (userInput) => {
        let slice = [...toDoList]
        slice = [...slice, {id: toDoList.length + 1, task: userInput, complete: false }]
        setToDoList(slice)
    }


    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} />
            <ToDoListForm addTask={addTask} />
        </div>
    );
}

export default App;
