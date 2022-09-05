import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'

export default function Albuns() {

  const [loading, setLoading] = useState(false)
  const [albuns, setAlbuns] = useState([])

  useEffect(() => { /* fetch no momento que o componente carregar */
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => {
      setAlbuns(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Loading visible={loading} />
      {
        albuns.map(album => {
          return (
            <div>
              <span>{album.title} - id: {album.id}</span>
            </div>
          )
        })
      }
    </>
  )
}
