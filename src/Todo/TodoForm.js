import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value){
            setValue("");
        }else{
            addTodo(value);

            setValue("");
        }
    }
    return (
        <form className='TodoForm' onSubmit = {handleSubmit}>
            <input type="text" className='TodoInput' value = {value} placeholder='Wpisz swoje zadanie' onChange = {(e) => setValue(e.target.value)}></input>
            <button type='submit' className='TodoButton'>Dodaj</button>
        </form>
    )
}