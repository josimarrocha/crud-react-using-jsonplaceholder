import React from 'react'
import Formulario from '../components/Formulario'

const NewPost = ({ novoPost, history }) => {
  const criarPots = (e) => {
    e.preventDefault()
    const title = e.target.titulo.value
    const body = e.target.mensagem.value

    if (!body || !title) return null

    const post = {
      title,
      body,
      userId: 10
    }
    novoPost(post).then(response => response ? history.push('/') : null)
  }

  return (
    <div className="row justify-content-center">
      <Formulario
        onSubmit={criarPots}
        editar={false}
      />
    </div>
  )
}

export default NewPost