import { useState } from "react";
import { useTodoContext } from "../proveder/TodoProveder";

const TodoForm = () => {
    const { NumberTodoListItem, addtodo } = useTodoContext();
    const [todoItem, setTodoItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addtodo(todoItem);
        setTodoItem("");
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Number of Todo Items : {NumberTodoListItem()}</h1>
            <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
