import { createSelector } from 'reselect'
import _ from 'lodash'

const postsSelector = state => state.posts.all
const selectedPostsSelector = state => state.posts.selectedPostIds

const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.values(posts).filter(post =>
    selectedPostIds.includes(post.id)
  )

  return selectedPosts
}

export default createSelector(postsSelector, selectedPostsSelector, getPosts)
