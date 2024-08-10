import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "./actions_creator"
function Todo({id,title})
{
    const[editing,setediting]=useState(false)
    const[newtitle,setnew]=useState(title)
    const dispatch=useDispatch()
    const handleTodo=()=>
    {
        if(newtitle.trim())
        {
           dispatch(updateTodo({id:id,title:newtitle}))   
           setediting(false)
        }
    }
    const handleDelte=()=>
    {
        dispatch(deleteTodo(id))
    }
    return(
        <div>
            {
                editing?(
                    <div className="form-group">
                        <input className="form-control" type="text" value={newtitle} onChange={(e)=>setnew(e.target.value)} />
                        <button className="btn btn-primary" onClick={handleTodo}>Save</button>
                    </div>
                ):(
                    <li className="list-group-item">
                        <p>{title}</p>
                        <div className="Actions">
                           <button className="btn btn-success m-1" onClick={()=>setediting(true)}>Edit</button>
                           <button className="btn btn-danger" onClick={handleDelte}>Delete</button>
                        </div>
                    </li>
                    
                )
            }
        </div>
    )
}
export default Todo