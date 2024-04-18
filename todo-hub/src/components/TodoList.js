import React  ,{useState} from "react";
import Todoitem from "./TodoItem";

const Todolist=()=>{

    const [task, setTask] = useState("");
   // const [tasks, setTasks] = useState([]);

    const AddTaskHandler=(e)=>{
    //  setTask(e);
    }

    return(<div className="todo-list">
        <h1>TODO LIST</h1>  
        <input  className="Taskinp" type="text" placeholder="Enter a Task "/>    
        <button className="btn" onChange={AddTaskHandler()}>Add Task</button>
        <div className="todoitems">
        <Todoitem text="create a app"/>
        <Todoitem text="cook for prisha"/>
        </div>
    </div>
    )
}

export default Todolist;