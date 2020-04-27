import React from 'react'

export default function InputButton(props) {
  return (
    <input 
      style={{marginBottom: '10px'}}
      type="file"
      multiple
      onChange={e => props.onChange(e)}
    />
  )
}