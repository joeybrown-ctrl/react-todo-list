import ToDo from "./ToDo"
import { ListGroup, ListGroupItem, Card, Button } from "react-bootstrap"

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div className="text-center">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <ListGroup variant="flush">
                    {toDoList.map(todo => {
                        return (
                            <ListGroupItem style={{ cursor: "pointer" }}>
                                <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                            </ListGroupItem>
                        )
                    })}

                </ListGroup>
            </Card>
            <Button variant="primary" className="my-5 text-center" onClick={handleFilter}>Clear Completed</Button>
        </div>
    )
}

export default ToDoList