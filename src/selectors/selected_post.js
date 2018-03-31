import { createSelector } from 'reselect'

const postsSelector = state => state.posts.all
const selectedPostsSelector = state => state.posts.selectedPostIds

const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = posts.filter(post => selectedPostIds.includes(post.id))

  return selectedPosts
}

export default createSelector(postsSelector, selectedPostsSelector, getPosts)
