import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css'
import { useForm } from '../../hooks/useForm';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export interface TodoAppProps {
  
}

const init = (): object => {
  return JSON.parse(localStorage.getItem('todos')) || []
}
 
const TodoApp: React.SFC<TodoAppProps> = () => {
  const [todos, dispatch] = useReducer( todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (id: number) => {

    const action = {
      type: 'DELETE',
      payload: id
    }
    dispatch(action)
  }
  const handleToggle = (todoId) => {
    dispatch({
      type: 'COMPLETE',
      payload: todoId
    })
  }

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'ADD',
      payload: newTodo
    }
    dispatch(action)
  }

  return ( 
    <div>
      <h1>Certification Microsoft ENCAMINA ({todos.length})</h1>
      <hr/>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle} 
          />
        </div>
        <div className="col-5">
          <TodoAdd 
            handleAddTodo={handleAddTodo}
          />
        </div>

      </div>
    </div>
   );
}
 
export default TodoApp;