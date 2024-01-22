import { useState } from 'react';
import './App.css';
import phrasers from './Utils/phrases.json';
import randomIndex from './services/randomindex';
import ButtonPhase from './Components/ButtonPhrase';
import RandomPhrase from './Components/RandomPhrase';
import bgArray from './Utils/bgArray.json';


function App() {
  
  
const bgIndex = randomIndex(bgArray);
  
  const sentence = randomIndex (phrasers);
  const [quote, setQuote] = useState (sentence);
  const [bgApp, setBgApp] = useState(bgIndex);
  
  const bgStyle ={
    backgroundImage: `url('../assets/fondo${bgApp}.jpg')`,
   
  }

  return (
    <>
    <div className='app' style={bgStyle} >
      <div className='container'>
        <h1>GALLETAS DE LA FORTUNA</h1>
        
        <RandomPhrase
          quote={quote}
          />
          <ButtonPhase 
          setQuote = {setQuote}
          setBgApp={setBgApp}
          />
          
      </div>
      </div>
    </>
  )
}

export default App
