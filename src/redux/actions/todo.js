///定义todo actions

export const INIT_TODO = 'INIT_TODO'
export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const COM_TODO = 'COM_TODO'
export const COM_ALL_TODO = 'COM_ALL_TODO'
export const LIST_TODO = 'LIST_TODO'
export const GET_COM_TODO = "GET_COM_TODO"


export const initTodo = todos => ({
    type: INIT_TODO,
    todos
})

export const addTodo = text => ({
    type: ADD_TODO,
    text
})

export const delTodo = index => ({
    type: DEL_TODO,
    index
})

export const comTodo = index => ({
    type: COM_TODO,
    index
})

export const comAllTodo = status=>{
    type: COM_ALL_TODO,
    status
}

export const listTodo = () => ({
    type: LIST_TODO
})

export const getComTodo = () => ({
    type: GET_COM_TODO
})