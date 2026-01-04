import { useState,useEffect } from 'react'
import './App.css'
import {quotes} from './quotes';

function App() {
  const [quote, setQuote] = useState("");
  const[author, setAuthor] = useState("");
  let random;


  function generateRandomQuote(){
    random = Math.floor(Math.random() * quotes.length);
     setQuote(quotes[random].quote);
      setAuthor(quotes[random].person);
  }

  useEffect(()=>{
    try{
      generateRandomQuote();
    } catch{
      window.alert("Error generating a random quote!");
    }
    
  },[]);



  return (
      <div className="container">
            <h2 className="header">Random Quote Generator</h2>
        <div className="main-content">
            <div>
                <span className="text-area">
                  {quote ? quote : "Quote will show up here..."}
                </span>
            </div>
            <div>
                <p id="person" className="person-area">{author ? author : "Author of the quote will show up here..."}</p>
            </div>
            <div>
                <button onClick={generateRandomQuote} className="quote-btn">
                    New Quote
                </button>
            </div>
        </div>
    </div>
      
  )
}

export default App
