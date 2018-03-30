import React, { Component } from 'react'

class PostsShow extends Component {
  render() {
    return (
      <div>
        <h3>Current post {this.props.params.id}</h3>
      </div>
    )
  }
}

export default PostsShow
