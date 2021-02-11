import React from 'react'
import TodoListItem from './TodoListItem';

interface Todo {
  id: number,
  desc: string,
  done: boolean
}
export interface TodoListProps {
  todos: Todo[];
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}
 
const TodoList: React.SFC<TodoListProps> = ({handleDelete, handleToggle, todos}) => {
  return ( 
        <ul className="list-group list-group-flush">
          {
            todos.map((todo: Todo, i: number) => (
              <TodoListItem
                key={i}
                index = {i}
                todo = {todo}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
              />
            ))
          }
        </ul>
   );
}
 
export default TodoList;