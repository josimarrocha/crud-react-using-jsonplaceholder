import React from 'react'

const Formulario = ({ onSubmit, editar, valueText, valueTextarea }) => {
  return (
    <form action="" className='col-8' onSubmit={onSubmit}>
      <legend className='text-align-center'>{editar ? 'Editar post' : 'Criar novo post'}</legend>
      <div className="form-group">
        <label htmlFor="">Título</label>
        <input
          type="text"
          name='titulo'
          className='form-control'
          placeholder={editar ? '' : 'Titulo do post'}
          defaultValue={editar ? valueText : ''} />
      </div>
      <div className="form-group">
        <label htmlFor="">Mensagem</label>
        <textarea
          className='form-control'
          name='mensagem'
          placeholder={editar ? '' : 'Conteudo...'}
          defaultValue={editar ? valueTextarea : ''}
          cols="30" rows="5">
        </textarea>
      </div>
      <button className='btn btn-primary'>{editar ? 'Salvar alterações' : 'Criar novo'}</button>
    </form>
  )
}

export default Formulario