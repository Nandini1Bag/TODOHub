import React  ,{useState,useEffect} from "react";
import axios from "axios";
import Todoitem from "./TodoItem";

const Todolist=()=>{

    const [task, setTask] = useState({});
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
      setTask(
        {
          id: Math.trunc(Math.random() * 1000 + 1),
          text:value
        }
      );
    }

    const onClickHandler=(e)=>{
      e.preventDefault();

      const postData = async () =>{
        try {
        await axios.post("http://localhost:8000/Tasks",task);
        } catch (error) {
          console.error(error.message);
        }
      }
    
      postData();
      setTasks([task,...tasks]);
      }
      
    return(<div className="todo-list">
        <h1>TODO LIST</h1>  
        <input className="Taskinp" type="text" placeholder="Enter a Task "required value={task.text} onChange={(e) => onChangeTaskHandler(e.target.value)} />    
        <button className="btn" onClick={onClickHandler} >Add Task</button>
        <div className="todoitems">
        {tasks.map( item => <Todoitem id={item.id} text={item.text}/>)}  
        </div>
    </div>
    )
}

export default Todolist;