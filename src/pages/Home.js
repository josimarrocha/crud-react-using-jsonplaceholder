import React, { Component } from 'react'
import ListPosts from '../components/ListPosts'

export default class Home extends Component {
  render() {
    const { posts, deletarPost } = this.props
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h2 className='text-center'>Posts</h2>
          <ListPosts
            posts={posts}
            deletarPost={deletarPost}
          />
        </div>
      </div>
    )
  }
}
