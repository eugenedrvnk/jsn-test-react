import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Heroes from 'pages/heroes/index'
import Create from 'pages/create/index'
import Hero from 'pages/hero/index'
import Edit from 'pages/edit/index'
import { AppProvider } from 'components/AppProvider'

import './App.scss'

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Route exact path="/">
          <Heroes/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/hero/:id'>
          <Hero/>
        </Route>
        <Route path='/edit/:id'>
          <Edit/>
        </Route>
      </AppProvider>
    </Router>
  )  
}