import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';

class Mylist extends Component {
	constructor(props) {
		super();
		this.state = {
			toDoItemArray: props.theList,
			newItem: '',
		};
	}
	clearList = (e) => {
		console.log('Clearing list!');
		this.setState({
			toDoItemArray: [],
		});
	};

	newItemChange = (e) => {
		//change value of new item to value  of input field (e)
		this.setState({
			newItem: e.target.value,
		});
	};

	addItem = (e) => {
		e.preventDefault();
		const thisArray = this.state.toDoItemArray;
		thisArray.push(this.state.newItem);
		this.setState({
			newItem: '',
			toDoItemArray: thisArray,
		});
	};
	render() {
		let todoItems = this.state.toDoItemArray.map((item, index) => {
			return <ListItem doThis={item} key={index} />;
		});

		return (
			<div>
				<h1>This I should stop procrastinating:</h1>
				<ul>{todoItems}</ul>
				<button onClick={(e) => this.clearList()}>Finished the list!</button>
				<form>
					<input
						type="text"
						placeholder="Type an item here"
						onChange={(e) => this.newItemChange(e)}
						value={this.state.newItem}
					/>
					<button onClick={(e) => this.addItem(e)}>Add it!</button>
				</form>
			</div>
		);
	}
}

export default Mylist;
