import React from 'react'

function RandomPhrase({quote}) {

    const {author, phrase} = quote;
  return (
    <div className='phraseautor'>
        <p>{phrase} </p>
        <p><span>,,</span></p>
        </div>
  )
}

export default RandomPhrase;