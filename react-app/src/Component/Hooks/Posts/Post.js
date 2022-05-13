import React from 'react'
import PropTypes from 'prop-types'

function Post(props) {
    const {posts} = (props);
  return (
    <ul className='post-list'>
        <h3>List post</h3>
        {posts.map(post => (
            <li
                key = {post.id}
            >
                {post.title}
            </li>
        ))}
    </ul>
  )
}

Post.propTypes = {
    posts: PropTypes.array
}
Post.defaultProps ={
    posts: []
}
export default Post

