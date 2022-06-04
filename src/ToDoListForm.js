import { useState } from "react"

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
        <form onSubmit={handleSubmit} className="mx-auto my-auto">
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
            <button>Submit</button>
        </form>
    )
}

export default ToDoListForm