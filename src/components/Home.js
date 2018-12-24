import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount(){

    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
    .then(res => {
      //console.log(res)
      this.setState({
        posts: res.data.slice(0,10)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    const { posts } = this.state
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
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

export default Home