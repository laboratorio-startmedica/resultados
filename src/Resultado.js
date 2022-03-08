import React from 'react'

const Resultado = ({id}) => {
  return (
    <div>
      <img src={`/result/${id}.jpg`} height="100%" />
    </div>
  )
}

export default Resultado