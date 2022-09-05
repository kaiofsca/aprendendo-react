import React, { useState, useEffect } from 'react' 
import Loading from '../components/Loading'

export default function Users() {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Loading visible={loading} />

      {
        users.map(user => {
          return (
            <div style={{margin:'10px'}}>
              <b>Nome:</b> {user.name} <br />
              <b>E-mail:</b> {user.email} <br />
              <b>Telefone:</b> {user.phone} <br />
              <b>Site:</b> {user.website} <br />
            </div>
          )
        })
      }

    </>
  )
}
