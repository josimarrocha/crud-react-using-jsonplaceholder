import React from 'react'
import Formulario from '../components/Formulario'

const EditPost = ({ post, editarPost, history }) => {
  if (!post.length) return null
  const { title, body, userId, id } = post[0]

  const editPost = (e) => {
    e.preventDefault()
    const title = e.target.titulo.value
    const body = e.target.mensagem.value

    if (!body || !title) return null

    const post = {
      title,
      body,
      userId,
      id
    }
    editarPost(post).then(response => response ? history.push('/') : null)
  }

  return (
    <div className="row justify-content-center">
      <Formulario
        onSubmit={editPost}
        editar={true}
        valueText={title}
        valueTextarea={body}
      />
    </div>
  )
}

export default EditPost