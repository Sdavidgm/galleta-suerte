import React from 'react'
import phrases from '../Utils/phrases.json';
import randomIndex from '../services/randomindex';

const ButtonPhase = ({setQuote})=> {
    const sentence = randomIndex(phrases);
    const handleButton = () =>{
      setQuote(sentence)
    }
  return (
    <button onClick={handleButton}>Ver otro</button>
  )
}

export default ButtonPhase;