import React from 'react'
import Header from '../partials/Header'
import Nav from '../partials/Nav'

export default function Template( {children, pages, activePage, onChangePage} ) {
  const title = pages[activePage].text
  return (
    <>
      <Header title={title} />
      <Nav pages={pages} onChangePage={onChangePage}/>
      {children}
    </>
  )
}
