import React from 'react'
import { Link } from 'react-router-dom'
const Navegacao = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to='/'> Todos os posts </Link>
      <Link to='/novo'> Novo post </Link>
    </nav>
  )
}

export default Navegacao
