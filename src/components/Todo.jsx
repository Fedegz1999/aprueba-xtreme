import React from "react";
import { Button } from "react-bootstrap";
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

export const Todo = ({task, taskComplete, taskDelete, TaskEdit}) => {
    return (
        <>
        <div className="Todo">
            <p onClick={() => taskComplete(task.id)} className={`task ${task.completed ? 'completed' : ""}`}>{task.task}</p>
<div>
    <Button variant="outlined" onClick={() => taskDelete(task.id)}><AiFillDelete/></Button>
    <Button variant="outlined" onClick={() => TaskEdit(task.id)}><FaEdit/></Button>
</div>
        </div>
        
        </>
    )
}