import React from 'react'

export default function Loading( {visible} ) {
  return (
    <div>
        {visible ? 'Carregando...' : ''}
    </div>
  )
}
