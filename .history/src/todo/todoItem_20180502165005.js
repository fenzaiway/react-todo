import React, { Component } from 'react';

class TodoItem extends Component{

    render(){
        <li key={index} className={this.props.item.status ? 'del' : ''}>
            <Checkbox 
                checked={item.status}
                onChange={this.selectItem.bind(this,index)}
            />
            {item.name} <Button onClick={this.removeItem.bind(this, index)} type="primary" icon="delete"></Button>
        </li>
    }
}

export default TodoItem