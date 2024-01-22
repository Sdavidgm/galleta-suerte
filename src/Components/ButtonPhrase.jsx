import React from 'react'
import phrases from '../Utils/phrases.json';
import randomIndex from '../services/randomindex';
import bgArray from '../Utils/bgArray.json';

const ButtonPhase = ({setQuote, setBgApp})=> {
    const bgIndex = randomIndex(bgArray);
    const sentence = randomIndex(phrases);
    const handleButton = () =>{
    setQuote(sentence);
    setBgApp (bgIndex);
    }
  return (
    <button onClick={handleButton}>Ver otro</button>
  )
}

export default ButtonPhase;