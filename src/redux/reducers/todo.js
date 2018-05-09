import {
    ADD_TODO,
    INIT_TODO,
    DEL_TODO,
    COM_TODO,
    COM_ALL_TODO,
    // LIST_TODO,
    GET_COM_TODO
} from '../actions/todo'
import {store} from '../../App'

/**
 *  text //内容
 *  status //状态
 */
const initState = [] //JSON.parse(localStorage.getItem('__nicup_item__') || '[]')

const todo = (state = initState, action) => {
    console.log(action);
    switch(action.type){
        case INIT_TODO:
            return [...action.todos]

        case ADD_TODO: 
            return [
                {
                    todoText: action.text,
                    status: false
                },
                ...state
            ]

        case DEL_TODO: 
        state.splice(action.index, 1)
            return [...state]

        case COM_TODO:
            return state.map((todo, index)=>{
                if(index === action.index){
                    return Object.assign({}, todo, {
                        status: !todo.status
                    })
                }
                return todo
            })

        case COM_ALL_TODO:
            
            return state.map(todo=>{
                return Object.assign({}, todo, {
                    status: action.status
                })
            })    

        // case LIST_TODO: 
        // return state
        default:
        return state
    }
}

export default todo