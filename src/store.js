import { createStore } from 'redux'

const initialstate = {
    todos: [],
    todoid: 1
}

function todoReducer(state = initialstate, action) {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = { id: state.todoid, title: action.payload.title }
            return {
                ...state, todos: [...state.todos, newTodo], todoid: state.todoid + 1
            }
        case "EDIT_TODO":
            return {
                ...state, todos: state.todos.map(
                    (todo) => todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
                )
            }
        case "DELETE_TODO":
            return {
                ...state, todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }
        default:
            return state
    }
}

let store = createStore(todoReducer)
export default store
