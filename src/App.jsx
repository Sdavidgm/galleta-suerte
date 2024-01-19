import { useState } from 'react';
import './App.css';
import phrasers from './Utils/phrases.json';
import randomIndex from './services/randomindex';
import ButtonPhase from './Components/ButtonPhrase';
import RandomPhrase from './Components/RandomPhrase';
function App() {
  

  
  const sentence = randomIndex (phrasers);
  const [quote, setQuote] = useState (sentence,);
  return (
    <>
      <div className='container'>
        <h1>GALLETAS DE LA FORTUNA</h1>
        
        <RandomPhrase
          quote={quote}
          />
          <ButtonPhase 
          setQuote = {setQuote}
          />
          
      </div>
    </>
  )
}

export default App
