import "./App.css";
import CardList from "../card_list";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Where in the world am i?</p>
                <CardList />
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
