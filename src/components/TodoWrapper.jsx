import React, {useState} from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4} from "uuid"
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

uuidv4()

export const TodoWrapper = () => {

const [todos, setTodos] = useState([])

const addTodo = (e) => {
    setTodos([...todos, {id: uuidv4(), task: e, completed: false, isEditing: false}])
}

console.log(todos)

const taskComplete = (id) => {
    setTodos(todos.map(item => item.id === id ? 
        {...item, completed: !item.completed} : item))
}

const taskDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
}

const editTodo = (task, id) => {
    setTodos(todos.map(item => item.id == id ? 
        {...item, task, isEditing: !item.isEditing} : item))
}

const taskEdit = (id) => {
setTodos(todos.map(item => item.id === id ?
    {...item, isEditing: !item.isEditing} : item))
}

    return (
        <div className="TodoWrapper">
        <h1 className="ListaH1">Lista de tareas</h1>
        <TodoForm addTodo={addTodo}/>

        {todos.map((item, index) => 
        item.isEditing ? (
            <EditTodoForm editTodo={editTodo} task={item}/>
        ) : (
        <Todo
        task={item}
        key={index}
        taskComplete={taskComplete}
        taskDelete={taskDelete}
        TaskEdit={taskEdit}
        />
        ))}
        
        </div>
    )
}