import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id) //id from <Route path="posts/:id"...
  }
  render() {
    const { post } = this.props

    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h5>{post.categories}</h5>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
