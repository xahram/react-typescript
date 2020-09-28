import React from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

export interface TodoShape {
    id: number;
    task: string;
}

const Todos: React.FC = (props) => {
    const todoList: TodoShape[] = [{ id: 1, task: "Go to School" }, { id: 2, task: "Eating Food" }]
    const [todos, setTodos] = React.useState(todoList)
    return (<div>
        <AddTodo tasks={todos} addTask={setTodos} />
        <TodoList items={todos} />
    </div>);
}
export default Todos;

