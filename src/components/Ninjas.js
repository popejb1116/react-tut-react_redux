import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) =>  {
  const ninjaList = ninjas.map(ninja => {
    return(
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={()=> deleteNinja(ninja.id)}>Delete</button><br/><br/>
      </div>
    )    
  })
  
  return (      
    <div className="ninja-list">
      <div>{ninjaList}</div>
    </div>
  )
}

export default Ninjas
