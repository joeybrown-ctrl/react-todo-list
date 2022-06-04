const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" className={todo.complete ? "strike" : ""} onClick={handleClick}>
            <span className="cursor-pointer">{todo.task}</span>
        </div>
    )
}

export default ToDo