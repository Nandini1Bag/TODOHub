import React from "react";

const Todoitem=(Props)=>{

 // const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));


    return(<table className="todo-item">
 <tbody>
    <tr>
      <input className="Taskinp" type="text" value={Props.text} /> 
      <td className="actions">
      <button className="btn">Edit </button> 
      <button className="btn" >Delete</button>
      </td>
    </tr>
  </tbody>
  </table>




    //    <input type="checkbox" checked={Props.check} />
    //    <input type="text">{Props.text}</input>
      
   )
}

export default Todoitem;