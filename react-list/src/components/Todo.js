import React,{useState} from 'react'
import TodoList from './TodoList'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
function Todo({todos, completeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    }); 
    return todos.map((todo, index) => {
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>

            </div>
            <div className="icons">
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    })
}
 
export default Todo
