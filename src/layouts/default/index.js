import React from 'react'
import AppHeader from 'components/AppHeader/index'

import './index.scss'

export default function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <AppHeader/>
      <div className="default-layout__container">
        {props.children}
      </div>
    </div>
  )
}