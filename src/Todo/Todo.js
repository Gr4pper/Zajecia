import React from 'react'
import './Todo.css';


export const Todo = ({task, toggleComplete, deleteTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className="task">{task.task}</p>
            <div className='delete'>
                <div onClick={() => deleteTodo(task.id)}>usuń</div>
            </div>
        </div>
    )
}