import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header'; 
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid}from 'uuid';
//import axios from 'axios';

import './App.css';

class App extends Component{
  state ={
    todos:[
      {
        id:uuid(),
        title: "take out the trash",
        completed : false
      },
      {
        id:uuid(),
        title: "Dinner",
        completed : false
      },
      {
        id:uuid(),
        title: "JS cource",
        completed : false
      }
    ]
  }
//function to call api 
/*
componentDidMount(){
   axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => {
     return this.setState({todos : res.data})
   })  
}
*/



  //mark to do toggling
  markComplete =(id) => {
    this.setState({todos : this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed= !todo.completed
      }
      return todo;
    }) });
}

//delete 
//learn filter thing
delTodo =(id) =>{
  this.setState({ todos : [...this.state.todos.filter(todo => todo.id
    !== id)]});
}

// add to
addTodo =(title) =>{
  const newTodo ={
    id:uuid(),
    title,
    completed: false
  }
  this.setState({ todos :[...this.state.todos , newTodo]});
}

  render(){
    return(
      <Router>
        <div className="App">
          <div className="container">  
            <Header/>  
            <Route exact path ="/"  render={ props =>(
              <React.Fragment>
                <AddTodo addTodo ={this.addTodo}/>
                <Todos todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo} />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
