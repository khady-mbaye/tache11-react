import './App.css';
import TodoProveder from './proveder/TodoProveder';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

function App() {
  return (
    <div className="App">
      <header>
       <h1>Todo List</h1>
       <TodoProveder>
        <TodoForm/>
        <TodoList/>
       </TodoProveder>
      </header>
    </div>
  );
}

export default App;
