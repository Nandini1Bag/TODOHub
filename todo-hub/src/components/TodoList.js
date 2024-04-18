import React  ,{useState,useEffect} from "react";
import axios from "axios";
import Todoitem from "./TodoItem";

const Todolist=()=>{

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);


useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get("http://localhost:8000/Tasks")
        setTasks(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

    const onChangeTaskHandler=(value)=>{
      setTask(value);
    }

    const onClickHandler=()=>{
     //   setTasks();
      }
    return(<div className="todo-list">
        <h1>TODO LIST</h1>  
        <input className="Taskinp" type="text" placeholder="Enter a Task "required value={task} onChange={(e) => onChangeTaskHandler(e.target.value)} />    
        <button className="btn" onClick={onClickHandler} >Add Task</button>
        <div className="todoitems">
        {tasks.map( d => <Todoitem text={d.text}/>)}  
        </div>
    </div>
    )
}

export default Todolist;