import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./actions_creator"
import Todolist from "./Todolist"
function Form()
{
    const dispatch=useDispatch()
    const[todotitle,settitle]=useState("")
    const handleTodo=()=>
    {
        if(todotitle.trim())
        {
            const newTodo={
                title:todotitle
            }
            dispatch(addTodo(newTodo))
            settitle("")
        }
    }
    return(
        <div className="container w-50">
              <h1 className="text-primary text-center mb-3">Todo-List using React-Redux </h1>
              <div className="d-flex ">
                 <input className="form-control" type="text"  value={todotitle} onChange={(e)=>settitle(e.target.value)}/>
                 <button className="btn btn-primary" onClick={()=>handleTodo()}>Add</button>
              </div>
              <Todolist/>
        </div>
    )

}
export default Form