import React,{useEffect, useState} from 'react';
import TodoItem from './ToDoItem';

// let toDoArray = [];
function ToDoList(){
    const [value,setValue] = useState('');
    const [toDoArray,setToDoArray] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        if(value !== "") {
            setValue(value);
            setToDoArray(toDoArray.concat(value));
            setValue('');
        }
    }


    return(
        <>
        <div className = "todolist__wrap" >
            <div className = "todolist todolist--add">
            <h1>Todos</h1>
                <div className="todoitem">
                    <form onSubmit={(event) => handleSubmit(event)} >
                        <input className="form__input" onChange={(event) => {
                            setValue(event.target.value);
                        }} value={value} />
                    </form>   
                </div>
            </div>
            <ul className = "todolist todolist--item">
            <TodoItem todoValue = {toDoArray}/>
            </ul>
        </div>
        </>
    )
}

export default ToDoList;