export const initialStore=()=>{
  return{
    message: null,
    pokemons: null,
    details: null,
    description: null,
    gender: null,
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
    case 'get_details':
      return {
        ...store, details: action.payload
      }
    case 'get_description':
      return {
        ...store, description: action.payload
      }
    case 'get_gender':
      return {
        ...store, gender: action.payload
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
