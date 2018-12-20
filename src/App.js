import React, { Component } from 'react'
import Ninjas from './Ninjas'

class App extends Component {

  state = {
   ninjas: [
     {name: 'Helio', age: '95', belt: 'coral', id: '1'},
     {name: 'Royce', age: '53', belt: 'black', id: '2'},
     {name: 'Jonathan', age: '33', belt: 'white', id: '3'},
   ]
  }

  render() {
    return (
      <div className="App">
       <h1>My first React app</h1>
       <Ninjas ninjas={this.state.ninjas}/>
      </div>
    )
  }
}

export default App;
