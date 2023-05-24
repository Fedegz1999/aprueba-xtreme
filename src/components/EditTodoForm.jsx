import React, {useState} from "react";
import { Button } from "react-bootstrap";

export const EditTodoForm = ({task, editTodo}) => {


const [value, setValue] = useState("")

function onSubmit (e) {
    e.preventDefault();
    editTodo(value, task.id)
    setValue("")
}


    return (
        <>
        <form className="TodoForm" onSubmit={onSubmit}>
            <input 
            type="text"
            className="todo-input"
            placeholder="Editar tarea"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
            <Button variant="success" size="md" type="submit">Confirmar cambios</Button>
        </form>
        </>
    )
}