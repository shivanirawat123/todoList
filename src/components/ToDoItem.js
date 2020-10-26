import React,{useState} from 'react';



function ToDoItem(props){
    return(
        <>
        {props.todoValue.map((item,index) => 
            <li className="todoitem todoitem--add" key={index}>
                <span className="todo">{item}</span>
                <button className="btn icon icon-delete" onClick={() => {props.deleteToDo(index);}}>&minus;</button>
            </li>
        )}
        </>
    )
}

export default ToDoItem;