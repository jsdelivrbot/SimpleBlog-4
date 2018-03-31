import { createSelector } from 'reselect'
import _ from 'lodash'

const postsSelector = state => state.posts.all
const selectedPostsSelector = state => state.posts.selectedPostIds

const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = selectedPostIds.map(id => {
    return posts[id]
  })

  return selectedPosts
}

export default createSelector(postsSelector, selectedPostsSelector, getPosts)
