import React from 'react'
import { connect } from 'react-redux'
import SelectedPostsSelector from '../selectors/selected_post'

const SelectedPostList = props => {
  return (
    <div>
      <h4>Selected posts</h4>
      <ul className="list-group">
        {props.posts.map(post => {
          return (
            <li className="list-group-item" key={post.id}>
              {post.title}
            </li>
          )
        })}
      </ul>
      <br />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: SelectedPostsSelector(state)
  }
}

export default connect(mapStateToProps)(SelectedPostList)
