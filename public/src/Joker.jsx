import React, { useState, useEffect } from 'react'

export default function Joker() {
    
    let [joke, setJoke] = useState({})
    
    let URL = "https://official-joke-api.appspot.com/random_joke"
    
    const getRandJoke = async () => {
      let res = await fetch(URL);
      let jsonResponse = await res.json();
      console.log(jsonResponse);
      setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }


    useEffect(()=> {
        async function getFirstJoke() {
        let res = await fetch(URL);
        let jsonResponse = await res.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
        }
        getFirstJoke();
    },[])
    

  return (
    <>
        <div>
            <h3>Jokes</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getRandJoke}>New jokes</button>
        </div>
    </>
  )
  }