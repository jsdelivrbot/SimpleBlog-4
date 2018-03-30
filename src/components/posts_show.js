import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id) //id from <Route path="posts/:id"...
  }
  render() {
    return (
      <div>
        <h3>Current post {this.props.params.id}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
