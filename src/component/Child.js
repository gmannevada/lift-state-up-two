import React from 'react'

export default function Child( {onTextChange}) {
  return (
    <div className='child'>
      <input type='text' onChange={onTextChange} />
    </div>
  )
}
