// create your App component here
import React, { useState, useEffect } from "react"

function App() {
    const [ fetched, setFetched ] = useState(false)
    const [ dogUrl, setDogUrl ] = useState("")

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then((randomDog) => {
                setDogUrl(randomDog.message)
                setFetched(true)
            })
    },[])
    return(
        <div>
            {fetched ? <img src={dogUrl} alt="A Random Dog"></img> :
            <p>Loading...</p>
            }
        </div>
    );
}

export default App