import React from 'react'
interface Todo {
  id: number,
  desc: string,
  done: boolean
}
export interface TodoListItemProps {
  index: number;
  todo: Todo;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}
 
const TodoListItem: React.SFC<TodoListItemProps> = ({todo, handleDelete, handleToggle, index}) => {
  return ( 
      <li   
        key={todo.id}
        className="list-group-item"
      >
        <p 
          className={`${todo.done && 'complete'}`}
          onClick={() => handleToggle(todo.id)}
        >
        {index + 1} . {todo.desc}
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
   );
}
 
export default TodoListItem;