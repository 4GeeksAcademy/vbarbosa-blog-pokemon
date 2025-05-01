export const initialStore=()=>{
  return{
    message: null,
    pokemons: null,
    details: null,
    description: null,
    species: null,
    types: null,
    oneType: null,
    items:null,
    item: null,
    favList:null,
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
    case 'get_species':
      return {
        ...store, species: action.payload
      }
    case 'get_types':
      return {
        ...store, types: action.payload
      }
    case 'get_one_type':
      return {
        ...store, oneType: action.payload
      }
    case 'get_items':

         return {
        ...store, items: action.payload
      }
    case 'get_one_item':

        return {
      ...store, item: action.payload
    }
    case 'add_fav':
      return {
        ...store, favList: action.payload
      }
    case 'remove_fav':
      return {
        ...store, favList: action.payload
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
