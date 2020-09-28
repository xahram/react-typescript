import React from 'react';
import useOnChangeHook from '../../../hooks/useOnChange'
import { TodoShape } from '../Todos'
const AddTodo: React.FC<{ tasks: TodoShape[], addTask: React.Dispatch<React.SetStateAction<TodoShape[]>> }> = ({ tasks, addTask }) => {
    const [value, setValue] = useOnChangeHook('');
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(tasks.concat({ id: 123, task: value }))
    }
    return (<>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="AddTask">Add Task</label>
                <input id="AddTask"
                    value={value}
                    onChange={setValue}
                    type="text"
                    placeholder="" />
            </div>
        </form>
    </>);
}
export default AddTodo;