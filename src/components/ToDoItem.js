import React,{useState} from 'react';



function ToDoItem(todoValue){
 
    function deleteToDo(todoIndex){
        console.log("index",todoIndex);        
    }
    return(
        <>
        {todoValue.todoValue.map((item,index) => 
            <li className="todoitem todoitem--add" key={index}>
                <span className="todo">{item}</span>
                <button className="btn icon icon-delete" onClick={() => {deleteToDo(index);}}>&minus;</button>
            </li>
        )}
        </>
    )
}

export default ToDoItem;