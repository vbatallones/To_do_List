import React, { Component } from 'react';
import ListItem from './ListItem'
import './App.css'


class Mylist extends Component {
    render() {
        let todoItems = this.props.theList.map((item, index) => {
           return <ListItem doThis={item} key={index} />
        })

        return (
            <div>
                <h1>This I should stop procrastinating:</h1>
                <ul>
                    {todoItems}
                </ul>
            </div>
        )
    }
}

export default Mylist

