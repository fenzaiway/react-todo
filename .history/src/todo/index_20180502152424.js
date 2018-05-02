import React, { Component } from 'react';

import {Input, Button, Message} from 'element-react'

import './todo.less'
class TodoApp extends Component {

    constructor(props){
        super(props)

        this.state = {
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

        let todos = this.state.todos
        todos.push({
            name: val,
            status: 1
        })

        this.setState({
            val: '',
            todos
        })
        
    }

    valChange = (val)=>{
        this.setState({val})
    }

    keyupHandler = (e)=> {
        e.keyCode === 13 && this.addItem()
    }

    removeItem = (e,index)=>{
        // let todos = this.state.todos
        // todos.splice(index, 1)
        // this.setState({todos})
        console.log(index);
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
                                <li key={index}>
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