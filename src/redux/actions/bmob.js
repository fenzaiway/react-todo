export const ADD_BMOB_OBJ = "ADD_BMOB_OBJ"
export const ADD_BMOB_QUERY = 'ADD_BMOB_QUERY'

/**
 * key : 对象
 * value 对象实例化
 * @param {*} obj 
 */
export const addBmobObj = obj=>{
    type: ADD_BMOB_OBJ,
    obj
}

export const addBmobQuery = obj=>{
    type: ADD_BMOB_QUERY,
    obj
}