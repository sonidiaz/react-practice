import React from 'react'
import { useForm } from '../../hooks/useForm';

interface Todo {
  id: number,
  desc: string,
  done: boolean
}

export interface TodoAddProps {
  handleAddTodo: (desc: string) => void;
}
 
const TodoAdd: React.SFC<TodoAddProps> = ({handleAddTodo}) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload: Todo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    handleAddTodo(payload)
    reset()
  }
  return ( 
    <>
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
    </>
   );
}
 
export default TodoAdd;