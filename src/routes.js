import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import api from './services/api'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost'

export default class Routes extends Component {
  state = {
    posts: []
  }

  componentWillMount() {
    this.obterPosts()

  }

  obterPosts = async () => {
    const response = await api.get('/posts')
    this.setState({ posts: response.data })
  }

  deletarPost = async (id) => {
    const response = await api.delete(`/posts/${id}`)
    if (response.status === 200) {
      let posts = [...this.state.posts]
      posts = posts.filter(post => post.id !== id)
      this.setState({ posts })
    }
  }

  novoPost = async (post) => {
    const response = await api.post(`/posts`, { ...post })
    if (response.status === 201) {
      this.setState({ posts: [...this.state.posts, response.data] })
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Post creado com sucesso!',
        showConfirmButton: true,
        // timer: 1500
      })
      return true
    }
  }

  editarPost = async (posteditado) => {
    const response = await api.put(`/posts/${posteditado.id}`, { ...posteditado })
    if (response.status === 200) {
      const { posts } = this.state
      this.setState({ posts: posts.map(item => item.id === posteditado.id ? response.data : item) })
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Post alterado com sucesso!',
        showConfirmButton: true,
      })
      return true
    }
  }

  render() {
    const { posts } = this.state
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Home
            posts={posts}
            deletarPost={this.deletarPost}
          />
        )} />

        <Route path='/post/:postId' render={(props) => {
          const idPost = props.match.params.postId
          return <PostDetails
            post={posts.filter(post => (post.id === +idPost))}
          />
        }} />

        <Route path='/novo' render={({ history }) => {
          return (
            <NewPost
              novoPost={this.novoPost}
              history={history}
            />
          )
        }} />

        <Route path='/editar/:postId' render={({ match, history }) => {
          const idPost = match.params.postId
          return (
            <EditPost
              post={posts.filter(post => (post.id === +idPost))}
              editarPost={this.editarPost}
              history={history}
            />
          )
        }} />
      </Switch>
    )
  }
}
