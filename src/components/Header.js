import React from 'react'
import { Link } from 'react-router-dom'
import Navegacao from './Navegacao'

const Header = () => {
  return (
    <header className='container'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <Link to='/'>
            <h1 className='text-center'>React Blog</h1>
          </Link>
        </div>
      </div>
      <Navegacao />
    </header>
  )
}

export default Header
