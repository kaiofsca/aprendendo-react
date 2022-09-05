import React, { useState } from 'react'

import Couter from './pages/Couter'
import Albuns from './pages/Albuns'
import Users from './pages/Users'
import Template from './templates/Template'

const pages = {
  albuns: {
    text: 'Álbuns',
    componente: Albuns,
  },
  couter: {
    text: 'Contador',
    componente: Couter,
  },
  users: {
    text: 'Usuários',
    componente: Users,
  }
}

export default function App() {
  const [page, setPage] = useState('albuns')

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].componente

  return (

      <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
        { Page && <Page /> }
      </Template>

  )
}

