import React, { Component } from 'react';

import {Input, Message, Checkbox} from 'element-react'

import './todo.less'

import TodoItem from './todoItem.js'

class TodoApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            checkAll: false,
            val:'',
            todos : []
        }
    }

    addItem = ()=>{
        
        let val = this.state.val

        if(val === ''){
            Message.error('请输入内容')
            return
        }

        let todos = this.getTodos()
        todos.push({
            name: val,
            status: false
        })

        this.setState({
            val: '',
            todos
        })
        
    }

    valChange = (val)=>{
        val = val.trim()
        this.setState({val})
    }

    keyupHandler = (e)=> {
        e.keyCode === 13 && this.addItem()
    }

    getTodos(){
        return this.state.todos
    }

    removeItem = (index)=>{
        let todos = this.getTodos()
        todos.splice(index, 1)
        this.setState({todos})
    }

    selectItem = (index)=>{
        let todos = this.getTodos()
        todos = todos.map((item, i) =>{
            if(i === index){
                item.status = !item.status
            }
            return item
        })

        this.setState({todos})
    }

    isCheckAll = ()=>{
        let todos = this.getTodos()
        let allCheck = todos.filter(item=>item.status===true)
        return (allCheck.length === todos.length && todos.length !== 0) || this.setState.checkAll
    }

    getComplectedLength = ()=>{
        let arr = this.getTodos().filter(item=>{
            return item.status === true
        })
        return arr.length
    }

    checkAllHandler = ()=>{
        this.setState({checkAll: !this.state.checkAll})
        let todos = null
        if(!this.state.checkAll){
            todos = this.getTodos().map(item=>{
                item.status = true
                return item
            })
        }else{
            todos = this.getTodos().map(item=>{
                item.status = false
                return item
            })
        }

        this.setState({todos})
    }

    render(){
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
                        this.state.todos.map((item, index)=>{
                            return (
                                <TodoItem 
                                    key={index} 
                                    item={item} 
                                    selectItem={this.selectItem}
                                    removeItem={this.removeItem}
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
                    total:{this.state.todos.length}， complected:{this.getComplectedLength()}
                </div>

            </div>
        )
    }
}

export default TodoApp