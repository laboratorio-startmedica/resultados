import React from 'react'

const Resultado = ({id}) => {
  return (
    <div height="100%">
      <img src={`/resultados/result/${id}.jpg`} style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} />
    </div>
  )
}

export default Resultado