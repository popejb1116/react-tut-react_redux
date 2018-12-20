import React, {Component} from 'react'

class AddNinja extends Component {

  state = {
    name: null,
    age: null,
    belt: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNinja(this.state)
  }

  handleChange = (e) => {    
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/><br/>

          <label htmlFor="age">Age: </label>
          <input type="text" id="age" value={this.state.age} onChange={this.handleChange}/><br/>

          <label htmlFor="belt">Belt: </label>
          <input type="text" id="belt" value={this.state.belt} onChange={this.handleChange}/><br/>

          <button>Submit</button>
        </form>
      </div>  
    )
  }  
}

export default AddNinja