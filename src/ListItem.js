import React, { Component } from 'react';
import './App.css'
class ListItem extends Component {
    render() {
        return (
            <div>
            <li className="todo">{this.props.doThis}</li>
            </div>
        )
    }
}

export default ListItem