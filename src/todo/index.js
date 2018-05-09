import React, { Component } from 'react';

import {Input, Message, Checkbox} from 'element-react'
import {connect} from 'react-redux'
import Constants from '../lib/constants'
import './todo.less'

import {
 ADD_TODO,
 DEL_TODO,
 COM_ALL_TODO,
 COM_TODO,
 LIST_TODO,
 GET_COM_TODO,
 INIT_TODO
} from '../redux/actions/todo'


import TodoItem from './todoItem.js'


class TodoApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            checkAll: false,
            val:''
        }
    }

    componentDidMount(){
        let tout = setInterval(()=>{
            let todoListQuery = this.props.todoListQuery
            if(todoListQuery) {
                clearInterval(tout)
                this.listTodo(todoListQuery)
            }
        },10)
        
    }

    listTodo(todoListQuery){
        todoListQuery.descending('createdAt').find().then(resp=>{
            let todos = resp.map(item=>{
                return item.attributes
            })
            this.props.initTodo(todos)
        })
    }

    addItem = ()=>{
        
        let val = this.state.val

        if(val === ''){
            Message.error('请输入内容')
            return
        }

        let todoListObj = this.props.todoListObj
        todoListObj.set('todoText', val)
        todoListObj.set('complete', false)
        todoListObj.save().then(resp=>{
            this.props.addTodo(val)
            this.setState({
                val: ''
            })
        }, err=>{
            console.error(err)
        })

    }

    valChange = (val)=>{
        val = val.trim()
        this.setState({val})
    }

    keyupHandler = (e)=> {
        e.keyCode === 13 && this.addItem()
    }

    isCheckAll = ()=>{
        let todos = this.props.todos
        let allCheck = todos.filter(item=>item.status===true)
        return (allCheck.length === todos.length && todos.length !== 0) || this.setState.checkAll
    }

    getComplectedLength = ()=>{
        let arr = this.props.todos.filter(item=>{
            return item.status === true
        })
        return arr.length
    }

    checkAllHandler = ()=>{
        this.props.comAllTodo(!this.isCheckAll())
    }

    render(){
        let {todos, delTodo, comTodo} = this.props
        localStorage.setItem('__nicup_item__', JSON.stringify(todos))
        return (
            <div className="todo">
                <Input 
                    onIconClick={this.addItem} 
                    onKeyUp={this.keyupHandler} 
                    value={this.state.val} 
                    onChange={this.valChange} 
                    placeholder="请输入内容" icon="plus" />
                <ul className="todo-list">
                    {
                        todos.map((item, index)=>{
                            return (
                                <TodoItem 
                                    key={index} 
                                    item={item} 
                                    selectItem={comTodo}
                                    removeItem={delTodo}
                                    index={index} />
                            )
                        })
                    }
                    
                </ul>
                <div className="list-detail">
                <Checkbox 
                    checked={this.isCheckAll()}
                    onChange={this.checkAllHandler}
                >全选</Checkbox>
                    total:{todos.length}， complected:{this.getComplectedLength()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        todoListQuery: state.bmob.query[Constants.bmob.TODO],
        todoListObj: state.bmob.obj[Constants.bmob.TODO]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initTodo: todos=>{
            dispatch({
                type: INIT_TODO,
                todos
            })
        },
        addTodo: text => {
            dispatch({type:ADD_TODO, text})
        },
        delTodo: index=>{
            dispatch({type: DEL_TODO, index})
        },
        comTodo:index=>{
            dispatch({
                type: COM_TODO,
                index
            })
        },
        comAllTodo:status=>{
            dispatch({
                type: COM_ALL_TODO,
                status
            })
        },
        getComTodo:()=>{
            dispatch({
                type: GET_COM_TODO
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)