import React from 'react';
import { TodoShape } from '../Todos'

const TodoList: React.FC<{ items: TodoShape[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                return <li>{item.task}</li>
            })}
        </ul>
    )
}

export default TodoList;