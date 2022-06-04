const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" className={todo.complete ? "strike" : ""} onClick={handleClick}>
            {todo.task}
        </div>
    )
}

export default ToDo