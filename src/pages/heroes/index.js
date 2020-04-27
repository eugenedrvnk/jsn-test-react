import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import DefaultLayout from 'layouts/default/index'
import AppPagination from 'components/AppPagination/index'
import HeroesList from 'components/heroes/HeroesList/index'
import { AppContext } from 'components/AppProvider'

import './index.scss'

export default function Index(props) {
  const context = useContext(AppContext)
  const [paginationPage, setPaginationPage] = useState(0)
  const itemsPerPage = 5

  function paginatedHeroes() {
    let start = paginationPage * itemsPerPage
    let end = start + itemsPerPage
    return context.heroes.slice(start, end)
  }
  
  return (
    <DefaultLayout>
      <HeroesList heroes={paginatedHeroes()}/>

      <div className="heroes__pagination-container">
        <AppPagination 
          totalItems={context.heroes.length} 
          activePage={paginationPage}
          itemsPerPage={itemsPerPage}
          onChange={e => setPaginationPage(e)}
        />
      </div>
    </DefaultLayout>
  )
}