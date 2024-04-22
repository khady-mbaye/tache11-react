import { useTodoContext } from "../proveder/TodoProveder";


const TodoList = () => {
    const {todolist , removetodo} = useTodoContext()
    return ( 
        <ul>
           {todolist.map((item , index) =>
           <span>
             <li key={index}>{item}</li>
            <button onClick={()=>removetodo(index)}>X</button>
           </span>
           )}
        </ul>
     );
}
 
export default TodoList;