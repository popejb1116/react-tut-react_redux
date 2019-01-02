import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {  

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  render() {

    let post = this.props.post ? (
      <div className="post left">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button 
            className="btn red darken-2" 
            onClick={this.handleClick}
          >Delete Post
            </button>
        </div>        
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )

    return (
      <div className="container">
        <div>{post}</div>             
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch(deletePost(id)) }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Post)