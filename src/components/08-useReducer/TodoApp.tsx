import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css'
import { useForm } from '../../hooks/useForm';

export interface TodoAppProps {
  
}

interface Todo {
  id: number,
  desc: string,
  done: boolean
}
const initialState: Todo[] = [
  {
    id: new Date().getTime(),
    desc: 'Fundamental',
    done: false
  }
]

const init = (): object => {
  return JSON.parse(localStorage.getItem('todos')) || []
}
 
const TodoApp: React.SFC<TodoAppProps> = () => {
  const [todos, dispatch] = useReducer( todoReducer, [], init)

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newTask: Todo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    const action = {
      type: 'ADD',
      payload: newTask
    }
    dispatch(action)
    reset()
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (id) => {

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

  return ( 
    <div>
      <h1>Certification Microsoft ENCAMINA ({todos.length})</h1>
      <hr/>
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
          {
            todos.map((todo: Todo, i: number) => (
              <li 
                key={todo.id}
                className="list-group-item"
              >
                <p 
                  className={`${todo.done && 'complete'}`}
                  onClick={() => handleToggle(todo.id)}
                >
                {i + 1} . {todo.desc}
                </p>
                <button 
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(todo.id)
                  }}
                >
                Borrar
                </button>
              </li>
            ))
          }
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Certificatión</h4>
          <hr/>
          <form onSubmit={handleSubmit}>
              <input 
              className="form-control "
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            /> 
            <button className="btn-agregar btn btn-outline-primary btn-block mt-1">
              Agregar
            </button>
          </form>

        </div>

      </div>
    </div>
   );
}
 
export default TodoApp;