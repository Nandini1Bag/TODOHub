import React  from "react";
import Todoitem from "./TodoItem";

const Todolist=()=>{
    return(<div className="todo-list">
        <h1>TODO LIST</h1>      
        <button className="btnadd">Add Task</button>
        <div className="todoitems">
        <Todoitem text="create a app"/>
        <Todoitem text="cook for prisha"/>
        </div>
    </div>
    )
}

export default Todolist;