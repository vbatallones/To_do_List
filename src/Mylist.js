import React, { Component } from 'react';
import ListItem from './ListItem'
import './App.css'




class Mylist extends Component {
    render() {
        return (
            <div>
                <h1>This I should stop procrastinating:</h1>
                <ul>
                    <ListItem doThis="Buy Shoes"/>
                </ul>
            </div>
        )
    }
}

export default Mylist

