import React, { Component } from 'react';
import {Checkbox, Button} from 'element-react'

class TodoItem extends Component{

    constructor(props){
        super(props)
    }

    removeItem = index=>{
        this.props.removeItem(index)
    }

    selectItem = index=>{
        this.props.selectItem(index)
    }

    render(){
        return (
            <li className={this.props.item.status ? 'del' : ''}>
                <Checkbox 
                    checked={this.props.item.status}
                    onChange={this.selectItem.bind(this,this.props.index)}
                />
                {this.props.item.name} <Button onClick={this.removeItem.bind(this, this.props.index)} type="primary" icon="delete"></Button>
            </li>
        )
    }
}

export default TodoItem