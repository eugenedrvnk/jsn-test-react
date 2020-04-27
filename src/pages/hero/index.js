import React, { useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { AppContext } from 'components/AppProvider'
import DefaultLayout from 'layouts/default/index'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@material-ui/core';

import './index.scss'

export default function Hero(props) {
  let history = useHistory()
  let context = useContext(AppContext)
  let match = useRouteMatch({
    path: '/hero/:id',
    strict: true,
    sensitive: true
  })

  let hero = context.heroes.find(hero => hero.id == match.params.id)
  let {images, ...heroTextFields} = hero

  function editButtonClick() {
    history.push(`/edit/${hero.id}`)
  }

  function deleteButtonClick() {
    context.deleteHero(hero.id)
    history.push(`/`)
  }

  return (
    <DefaultLayout>
      <div className="hero">
        <Carousel className="hero__carousel">
          {hero.images.map(img => 
            <img src={img} className="hero__carousel-img"/>
          )}
        </Carousel>

        <div className="hero__manage-buttons">
          <Button variant="contained" onClick={() => editButtonClick()}>Edit</Button>
          <Button variant="contained" onClick={() => deleteButtonClick()}>Delete</Button>
        </div>

        <div className="hero__info-list">
          {Object.keys(heroTextFields).map((key, index) => 
            <div className="hero__info-item" key={index}>
              <div className="hero__info-item-key">{key}</div>
              <div className="hero__info-item-value">{heroTextFields[key]}</div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}