import React from 'react'

export default function Nav({ pages, onChangePage }) { /*ta recebendo uma referencia de função pelo props*/
const pageNames = Object.keys(pages)
  return (
    <nav>
        {
            pageNames.map(page => <button onClick={() => onChangePage(page)}>{pages[page].text}</button>)
        }
    </nav>
  )
}
