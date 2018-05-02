import React, { Component } from 'react';

import {Input, Button, Message, Checkbox} from 'element-react'

import './todo.less'
class TodoApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            checkAll: false,
            checkItem:[],
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
        console.log(index);
        let todos = this.getTodos()
        todos = todos.map((item, i) =>{
            if(i === index){
                item.status = !item.status
            }
            return item
        })

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
                                <li key={index} className={item.status ? 'del' : ''}>
                                    <Checkbox 
                                        checked={item.status}
                                        onChange={this.selectItem.bind(this,index)}
                                    />
                                    {item.name} <Button onClick={this.removeItem.bind(this, index)} type="primary" icon="delete"></Button>
                                </li>
                            )
                        })
                    }
                    
                </ul>


            </div>
        )
    }
}

export default TodoApp