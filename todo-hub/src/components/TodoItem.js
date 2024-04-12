import React from "react";

const Todoitem=(Props)=>{
    return( <div className="todo-item">
       <input type="checkbox" checked={Props.check} />
       <p>{Props.text}</p>
       <button>Delete</button>
    </div>)
}

export default Todoitem;