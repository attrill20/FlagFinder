import "./App.css";
import CardList from "../card_list";
import React, { useEffect, useState } from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    const [data, setData] = useState("Hello");
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
            );
            const data = await response.json();
            console.log(data);
            console.log(data[202].capital)
            // console.log(data[0].name.common);
            // setData(data[0].name.common);
            setData(data);
        }
        fetchData();
    }, []);

    function handleClick() {
        setClicked(!clicked);
    }

    let name = "Germany";
    return (
        <ChakraProvider>
        <div className="App">
            <header className="App-header">
                <p>Where in the world am i?</p>
                <CardList data={data} />
                <button onClick={() => handleClick()}>Click for data</button>
            </header>
        </div>
        </ChakraProvider>
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
