import React, { Component } from 'react';

class AddTodo extends Component {

  state = {
    content: null
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      content: null
    })
    e.target.reset()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default AddTodo

{/*
  This method is sometimes used to clear fields but didn't work for me?
<input type="text" onChange={this.handleChange} value={this.state.content}/>

  Had to add e.target.reset() instead?
*/}