import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos'

export default class App extends Component {
    state = {
      todos: [
        {
          id: 1,
          title : 'go to the mall',
          completed : false

        },

        {
          id: 2,
          title : 'go to the church',
          completed : true
        },

        {
          id :3,
          title : 'read your book',
          completed : true
        }
      ]
    }
    // to add an event to the checkbox
    markComplete = (id) =>{
      // change the state of the todos by looping through each object
      this.setState({ todos: this.state.todos.map(todo => {
        // setting a condition if the title selected with its id is same with the id in the array
        if(todo.id === id) {
        // if true or false, just toggle
          todo.completed = !todo.completed
        }
        return todo;
      })})
    }

    // Delete Todo
    delTodo = (id) =>{
      console.log(id)
    }
  render() {
    return (
      <div>
        <h1>welcome to vtek</h1>
        <Todos todos = { this.state.todos } markComplete = { this.markComplete } delTodo = { this.delTodo }/>
      </div>
    )
  }
}
