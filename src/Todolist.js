import { useSelector } from "react-redux"
import Todo from "./Todo"
function Todolist()
{
    const data=useSelector((state)=>state.todos)
   return(
    <ul className="list-group mt-3">
        {
            data.map(
                (todo)=>(<Todo key={todo.id} id={todo.id} title={todo.title}/>)
            )
        }
    </ul>
   )
}
export default Todolist