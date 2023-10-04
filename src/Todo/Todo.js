import React from 'react'
import './Todo.css';


export const Todo = ({task, toggleComplete, deleteTodo}) => {
    return (
        <div className='Todo'>
            <div onClick={() => toggleComplete(task.id)}  className={`${task.completed ? 'completed':"task"} `}>
                {task.task}
            </div>
            <div className='delete'>
                <div onClick={() => deleteTodo(task.id)}>usuń</div>
            </div>
        </div>
    )
}