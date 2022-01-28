import './Todo.css';
import React, { useState } from "react";

const Todo = props => {
    const [task, setTask] = useState({ value: '' });
    const [list, setList] = useState([]);
    const [remain, setRemain] = useState(0)

    const handleChange = (e) => {
        setTask({ value: e.target.value })
    };

    const addList = (e) => {
        if (e.type === 'click' || e.code === 'Enter' || e.code === 'NumpadEnter')
            if (task.value) {
                setList([...list, task]);
                setRemain(remain + 1)
                setTask({ value: '' })
                document.getElementById('fieldTask').focus();
            }
    }

    const deleteItem = (e) => {
        const index = e.target.value;
        list.splice(index, 1)
        setList(list);
        setRemain(remain - 1)
        setTask({ value: '' })
    }

    const countRemain = (e) => {
        if (e.target.checked === true) {
            setRemain(remain - 1)
        } else {
            setRemain(remain + 1)
        }
    }

    const renderList = list.map((item, i) => {
        return (
            <tr key={i}>
                <td>
                    <input type="checkbox" onChange={countRemain} />
                </td>
                <td className='tdTable'>
                    <span>{item.value}</span>
                </td>
                <td>
                    <button value={i} onClick={deleteItem}>Del</button>
                </td>
            </tr>
        )
    });

    return (
        <div className="Todo">
            <h3>Todo List:</h3>
            <input
                type='text'
                id='fieldTask'
                value={task.value}
                onChange={handleChange}
                onKeyDown={addList}
            />
            <button onClick={addList}>Add</button>
            <table>
                <tbody>
                    {renderList}
                </tbody>
            </table>
            <div className='CountTasks'>
                <span>Taks: {list.length}</span> - <span>Remain: {remain}</span>
            </div>
        </div>
    );
}

export default Todo;