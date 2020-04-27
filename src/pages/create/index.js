import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";

import DefaultLayout from 'layouts/default/index'
import { AppContext } from 'components/AppProvider'
import { Input, Button } from '@material-ui/core';
import InputButton from 'components/Buttons/InputButton/index'

import './index.scss'

export default function Create(props) {
  const [textInputs, setTextInputs] = useState({
    nickname: '',
    realname: '',
    originDesc: '',
    superPowers: '',
    catchPhrase: '',
  })
  
  let history = useHistory()
  let context = useContext(AppContext)
  const [images, setImages] = useState([])

  function onInputChange(e, key) {
    setTextInputs({
      ...textInputs,
      [key]: e.target.value
    })
  }

  function onImageUpload(e) {
    let files = e.target.files
    setImages(Object.keys(files).map(key => (URL.createObjectURL(files[key]))))
  }

  function onCreateButtonClick() {
    let itemId = context.heroes.length
    context.addHero({
      id: itemId,
      ...textInputs, 
      images
    })

    history.push(`/hero/${itemId}`)
  }

  return (
    <DefaultLayout>
      <div className="create-form">
        <div className="create-form__inputs">
          {Object.keys(textInputs).map((key, index) =>
            <Input 
              className="create-form__input"
              value={textInputs[key]}
              placeholder={key}
              key={index}
              onChange={(e) => onInputChange(e, key)}
            />
          )}
        </div>

        <InputButton onChange={onImageUpload}/>

        <Button 
          variant="contained" 
          className="create-form__create-btn"
          onClick={onCreateButtonClick}
        >
          Create hero 🔥
        </Button>
      </div>
    </DefaultLayout>
  )
}