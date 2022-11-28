import React, { useState, useEffect } from 'react'
import './index.css';

const App = () => {

  const [quotes, setQuotes] = useState(" "); 

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')  
      .then((response) => response.json()) //json veriyi text haline getirir.
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length)
        setQuotes(data[randomNum])
      });
  }

  useEffect(()=> {    
    getQuote();   
  },[]);
 
  return (    
    <div className='App'>  
      <div className="quote">
         <center><p id="qtext">{quotes.text}</p></center>
         <center><p id="qauthor">{quotes.author}</p></center>
         <center><button id= "btn" onClick={getQuote} type="button" class="btn btn-primary">New Quote</button></center>
         <div></div>
      </div>
    </div>
  )
}

export default App
