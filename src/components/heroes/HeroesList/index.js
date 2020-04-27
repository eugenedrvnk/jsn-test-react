import React from 'react'

import HeroesItem from 'components/heroes/HeroesItem/index'
import './index.scss'

export default function HeroesList(props) {

  return (
    <div className="heroes-list">
      {props.heroes.map(hero => 
        <HeroesItem hero={hero}/>  
      )}
    </div>
  )
}