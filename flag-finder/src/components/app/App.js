import "./App.css";
import CardList from "../card_list";
import SearchBar from "../search_bar";
import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    const [data, setData] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
            );
            const data = await response.json();
            console.log(data);
            setData(data);
            setFilteredCountries(data);
        }
        fetchData();
    }, []);

    const handleSearchInputChange = (event) => {
        const searchInput = event.target.value;
        setFilteredCountries(
          data.filter(
            (country) =>
              country.name.common.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
          )
        );
      };

    return (
        <ChakraProvider>
            <div className="app">
                <header className="header">
                    <b>Where in the world?</b>
                </header>

                <div className="search-bar">
                        <SearchBar onChange={handleSearchInputChange}/>
                    </div>
                
                <div className="main-page">

                    {data && <CardList data={filteredCountries} />}
                </div>
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
