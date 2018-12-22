import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some mild'},
      {id: 2, content: 'play mariocart'}
    ]
  }

  deleteTodo = (id)=> { 
    const todosForEdit = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    
    this.setState({
      todos: todosForEdit
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todosForEdit = [...this.state.todos, todo]

    this.setState({
      todos: todosForEdit
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />     
      </div>
    )
  }
}

export default App;
