import React ,  {createContext, useContext, useState, children } from "react";

const initialTodoListState = ["Lear react context API"]

const todoContent = createContext() 

const TodoProveder = ({children}) => {
    const [todolist , setTodolist] = useState(initialTodoListState)
    const NumberTodoListItem = ()=> todolist.length
    const addtodo = (newtodo)=>{
        setTodolist([...todolist , newtodo])
    }
    const removetodo = (todoindex) =>{
        const newtodo = todolist.filter((_,index)=>index != todoindex)
        setTodolist(newtodo)
    }
    const contextValue = {
        todolist,
        NumberTodoListItem,
        addtodo,
        removetodo,
    }
    
    return <todoContent.Provider value={contextValue}>{children}</todoContent.Provider>
}
export const useTodoContext = ()=>useContext(todoContent)
export default TodoProveder;