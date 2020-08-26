import React from 'react';
import ReactDOM from 'react-dom';
import Mylist from './Mylist'
import './index.css';
import * as serviceWorker from './serviceWorker';
import ListItem from './ListItem';

const theList = ['Go to the gym', 'Eat ice cream', 'Buy ice cream']

ReactDOM.render(
  <React.StrictMode>
    <Mylist theList={theList}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
