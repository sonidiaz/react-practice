
interface Todo {
  id: number,
  desc: string,
  done: boolean
}
export const todoReducer = (state:Todo[] = [], action:any ) => {
  switch (action.type) {
    case 'ADD':
        return [...state, action.payload];
    case 'DELETE': 
      return state.filter( todo => todo.id !== action.payload )
    case 'COMPLETE':
      return state.map(todo => (
        todo.id === action.payload 
        ? {...todo, done: !todo.done }
        : todo
      ))

    default:
      return state;
  }

}