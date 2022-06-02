import { useState } from "react"
import './App.css';
import Header from "./components/Header/Header"
import ToDoList from "./components/ToDoList/ToDoList"
import data from "./data/data.json"

function App() {
    const [toDoList, setToDoList] = useState()
    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} />
        </div>
    );
}

export default App;
