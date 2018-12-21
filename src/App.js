import React, { Component } from 'react'
import Ninjas from './components/Ninjas'
import AddNinja from './components/AddNinja'

class App extends Component {

  state = {
   ninjas: [
     {name: 'Helio', age: '95', belt: 'coral', id: '1'},
     {name: 'Royce', age: '53', belt: 'black', id: '2'},
     {name: 'Jonathan', age: '33', belt: 'white', id: '3'},
   ]
  }

 
  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !==id
    })

    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <AddNinja addNinja={this.addNinja}/><br/>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
      </div>
    )
  }
}

export default App;
