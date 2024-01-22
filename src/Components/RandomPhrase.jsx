import React from 'react'

function RandomPhrase({quote}) {

    const {author, phrase} = quote;
  return (
    <div className='phraseautor'>
        <p>{phrase}</p>
        
        </div>
  )
}

export default RandomPhrase;