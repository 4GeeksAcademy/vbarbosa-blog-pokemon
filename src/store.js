export const initialStore=()=>{
  return{
    message: null,
    pokemons: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_all_pokemons':
      return {
        ...store, pokemons: action.payload
      }
    case 'get_pokemons':
      return {
        ...store, pokemons: action.payload
      }
        
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
