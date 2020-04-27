import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import './index.scss'
import { Button } from '@material-ui/core';

export default function AppHeader(props) {
  const headerItems = [
    {
      name: 'All heroes',
      path: '/'
    },
    {
      name: 'Create hero',
      path: '/create'
    }
  ]

  let location = useLocation();
  
  function createButton(item) {
    if (item.path == location.pathname) return <Button variant="contained" color="primary">{item.name}</Button>
    else return <Button variant="contained">{item.name}</Button>
  }

  return (
    <nav className="app-header">
      {headerItems.map((item, index) =>
        <Link 
          to={item.path}
          key={index}
          className="app-header__link"
        >
          {createButton(item)}
        </Link>
      )}
    </nav>
  )
}