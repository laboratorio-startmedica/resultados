import React from 'react'
import { useParams } from 'react-router-dom'

const Resultado = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <img src={`/result/${id}.jpg`} height="100%" />
    </div>
  )
}

export default Resultado