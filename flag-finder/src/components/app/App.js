import "./App.css";
import CardList from "../card_list";
import React, { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState("Hello");
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://restcountries.com/v3.1/name/deutschland?fields=name,flags"
            );
            const data = await response.json();
            console.log(data);
            console.log(data[0].name.common);
            setData(data[0].name.common);
        }
        fetchData();
    }, []);

    function handleClick() {
        setClicked(!clicked);
    }

    let name = "Germany";
    return (
        <div className="App">
            <header className="App-header">
                <p>Where in the world am i?</p>
                <CardList name={data} />
                <button onClick={() => handleClick()}>Click for data</button>
            </header>
        </div>
    );
}

export default App;

/* 
- Set up API fetch 
  - flag 
  - country name 
  - population 
  - region 
  - capital 
- import Component from ChakraUI
  - card component
  - search bar 
  - filter bar 

*/
