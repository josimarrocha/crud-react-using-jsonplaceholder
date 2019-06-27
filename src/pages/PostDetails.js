import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    if (!this.props.post.length) return null
    const { title, body, userId } = this.props.post[0]

    return (
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-8">
          <h1>{title}</h1>
          <p>Author: {userId}</p>
          <p>{body}</p>
        </div>
      </div>
    )
  }
}
