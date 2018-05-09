import {ADD_BMOB_OBJ, ADD_BMOB_QUERY} from '../actions/bmob'

const initState = {
    obj:{

    },
    query:{

    }
}

const bmob = (state = initState, action)=>{

    switch(action.type){
        case ADD_BMOB_OBJ:
            {
                let obj = action.obj
                state.obj[obj.key] = obj.value
                return Object.assign({}, state)
            }
        case ADD_BMOB_QUERY:
            {
                let obj = action.obj
                state.query[obj.key] = obj.value
                return Object.assign({}, state)
            }
        default:
            return state
    }

}

export default bmob