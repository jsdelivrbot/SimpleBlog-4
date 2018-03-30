import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router'

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id) //id from <Route path="posts/:id"...
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id).then(() => {
      this.context.router.push('/')
    })
  }

  render() {
    const { post } = this.props

    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/" className="link">
          {'< Return to posts list'}
        </Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right"
        >
          Delete the post
        </button>

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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
