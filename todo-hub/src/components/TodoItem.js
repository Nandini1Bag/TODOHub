import React from "react";

const Todoitem=(Props)=>{
    return(<table className="todo-item">
 <tbody>
    <tr>
      <input className="Taskinp" type="text" value="ggtf" /> 
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