import React, { Component } from 'react';
import Header from './components/layouts/Header'; 
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component{
  state ={
    todos:[
      {
        id:1,
        title: "take out the trash",
        completed : false
      },
      {
        id:2,
        title: "Dinner",
        completed : false
      },
      {
        id:3,
        title: "JS cource",
        completed : false
      }
    ]
  }
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



  render(){
    return(
      <div className="App">
        <div className="container">  
          <Header/>     
          <AddTodo/>
          <Todos todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}
export default App;
