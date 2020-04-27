import React, { useState, useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import DefaultLayout from 'layouts/default/index'
import { Carousel } from 'react-responsive-carousel';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { AppContext } from 'components/AppProvider'
import { Input, Button } from '@material-ui/core';
import InputButton from 'components/Buttons/InputButton/index'

import './index.scss'

export default function Edit(props) {
  let history = useHistory()
  let context = useContext(AppContext)
  let match = useRouteMatch({
    path: '/edit/:id',
    strict: true,
    sensitive: true
  })

  let hero = context.heroes.find(hero => hero.id == match.params.id)
  let {images, id, ...heroTextFields} = hero

  const [textInputs, setTextInputs] = useState({...heroTextFields})

  let setImages;
  [images, setImages] = useState(images)
  let activeImage = 0

  function onInputChange(e, key) {
    setTextInputs({
      ...textInputs,
      [key]: e.target.value
    })
  }

  function onImageUpload(e) {
    let files = e.target.files
    let newImages = Object.keys(files).map(key => (URL.createObjectURL(files[key])))
    setImages(images.concat(newImages))
  }

  function onUpdateButtonClick() {
    context.updateHero(
      hero.id,
      {
        ...textInputs,
        images
      }
    )

    history.push(`/hero/${hero.id}`)
  }

  function carouselChange(index) {
    activeImage = index
  }

  function onDeleteImageButtonClick() {
    setImages(images.filter((_, index) => index != activeImage))
  }

  return (
    <DefaultLayout>
      <div className="edit-form">
        <div className="edit-form__inputs">
          {Object.keys(textInputs).map((key, index) =>
            <Input 
              className="edit-form__input"
              value={textInputs[key]}
              placeholder={key}
              key={index}
              onChange={(e) => onInputChange(e, key)}
            />
          )}
        </div>

        <InputButton onChange={onImageUpload}/>
        
        <div className="edit-form__carousel">
          <Carousel 
            className="hero__carousel"
            onChange={carouselChange}
            showThumbs={false}
          >
            {images.map((img, index) => 
              <img 
                src={img} 
                key={index}
                className="hero__carousel-img"
              />
            )}
          </Carousel>
          <Button 
            variant="contained"
            onClick={onDeleteImageButtonClick}
          >
            Delete image
          </Button>
        </div>

        <Button 
          variant="contained" 
          className="edit-form__create-btn"
          onClick={onUpdateButtonClick}
        >
          Update hero 🔥
        </Button>
      </div>
    </DefaultLayout>
  )
}