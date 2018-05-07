import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers/index'
import * as actionCreators from '../actions/todo'

export default (initState = {}) =>{
    let middleWare = applyMiddleware(thunk)

    const store  = createStore(reducers, initState, /*middleWare,*/
        //redux调试代码
        window.devToolsExtension && window.devToolsExtension({ actionCreators })
    )

    //热加载,及时跟新reducer
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store
}