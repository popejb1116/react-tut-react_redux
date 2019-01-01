import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {  
  
  render(){

    console.log(this.props)

    const { posts } = this.props
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div className="Home">
            <div className="post card" key={post.id}>
              <img src={Pokeball} alt="A pokeball"/>
              <div className="card-content red-text">
                <Link to={'/' + post.id}>
                  <span className="card-title">{post.title}</span>
                </Link>              
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        No Posts Yet
      </div>
    )

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postsList}      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)