import { useState } from "react"
import './App.css';
import Header from "./Header"
import data from "./data.json"
import ToDoList from "./ToDoList";

function App() {
    const [toDoList, setToDoList] = useState(data)
    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} />
        </div>
    );
}

export default App;
