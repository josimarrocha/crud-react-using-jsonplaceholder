import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ListPosts = ({ posts, deletarPost }) => {
  if (!posts.length) return null

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Deletar post',
      text: "Tem certeza que deseja deletar este post?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.value) {
        deletarPost(id)
        Swal.fire(
          'Deletado!',
          'Seu post foi deletado.',
          'success'
        )
      }
    })
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Título</th>
          <th scope='col'>Ações</th>
        </tr>
      </thead>

      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td className='d-flex'>
              <Link to={`/post/${post.id}`} className='btn btn-primary mr-3'>Visualizar</Link>
              <Link to={`/editar/${post.id}`} className='btn btn-warning mr-3'>Editar</Link>
              <button onClick={() => confirmDelete(post.id)} className='btn btn-danger'>Deletar</button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListPosts