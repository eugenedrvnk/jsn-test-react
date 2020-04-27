import React from 'react'
import { useHistory } from "react-router-dom";

import './index.scss'

export default function HeroesItem(props) {
  let history = useHistory()

  function onItemClick() {
    history.push(`/hero/${props.hero.id}`)
  }

  return (
    <div 
      className="heroes-item"
      onClick={() => onItemClick()}
    >
      <div className="heroes-item__avatar">
        <img 
          className="heroes-item__avatar-img"
          src={props.hero.images[0]}
        />
      </div>

      <div className="heroes-item__nickname">
        {props.hero.nickname}
      </div>
    </div>
  )
}