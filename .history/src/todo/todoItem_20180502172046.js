import React, { Component } from 'react';
import {Checkbox} from 'element-react'

class TodoItem extends Component{

    constructor(props){
        super(props)
        this.state = {
            index: this.props.index
        }
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
                    checked={item.status}
                    onChange={this.selectItem.bind(this,this.state.index)}
                />
                {item.name} <Button onClick={this.removeItem.bind(this, this.state.index)} type="primary" icon="delete"></Button>
            </li>
        )
    }
}

export default TodoItem