import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, checkedPost } from '../actions'
import { Link } from 'react-router'
import SelectedPostList from './selected_posts_list'
import _ from 'lodash'
import AboutPro from './about_pro'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  onCheckPost(postId) {
    this.props.checkedPost(postId)
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <input
            type="checkbox"
            className="form-check-input"
            onClick={this.onCheckPost.bind(this, post.id)}
          />
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <AboutPro />
        <div />

        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>

        <SelectedPostList />
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: _.values(state.posts.all) }
}

export default connect(mapStateToProps, { fetchPosts, checkedPost })(PostsIndex)
