import "./App.css";
import CardList from "../card_list";
import SearchBar from "../search_bar";
import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
            );
            const data = await response.json();
            console.log(data);
            setData(data);
        }
        fetchData();
    }, []);

    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <p>Where in the world am I?</p>
                    <SearchBar />
                    {data && <CardList data={data} />}
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

- create 5 states
- map over the array of all countries
- render a card for each one containing all 5 bits of data

  - card component
  - search bar 
  - filter bar 

*/
