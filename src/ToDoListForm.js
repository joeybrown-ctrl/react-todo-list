import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ToDoListForm = ({addTask}) => {
    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." className="w-25 justify-content-center mr-2" />
            <button variant="primary">Submit</button>
        </form>
    )
}

export default ToDoListForm