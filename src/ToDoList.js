import ToDo from "./ToDo"

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className="mx-auto">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button onClick={handleFilter} className="my-4 border-solid hover:border-double">Clear Completed</button>
        </div>
    )
}

export default ToDoList