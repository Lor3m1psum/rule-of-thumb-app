
import './App.css'
import { CardGrid } from './components/CardGrid/CardGrid';
import { CardList } from './components/CardList/CardList';
import { data } from './assets/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [celebrityData, setCelebrityData] = useState([]);
  const [cardDisplay, setCardDisplay] = useState("grid");

  useEffect(() => {
    if (localStorage.getItem("savedData")) {
      setCelebrityData(JSON.parse(localStorage.getItem("savedData")));
    } else {
      setCelebrityData(data);
      localStorage.setItem("savedData", JSON.stringify(data));
    }
  }, []);

  const onVoteChanged = ({ name, newVotes }) => {
    const updatedCelebrities = celebrityData.map(celebrity => celebrity.name === name ? {...celebrity, votes: newVotes} : celebrity);
    setCelebrityData(updatedCelebrities);
    localStorage.setItem("savedData", JSON.stringify(updatedCelebrities));
  }
  
  const ComponentToRender = cardDisplay === "grid" ? CardGrid : CardList;

  return (
    <div className="App">
      <div className="select-view">Previous Rulings <select className="select-style" onChange={(event) => setCardDisplay(event.target.value)}>
        <option className="select-option" value="grid">Grid</option>
        <option className="select-option" value="list">List</option>
      </select></div>
      
      <div className={`card-wrapper ${cardDisplay === "grid" ? "card-wrapper-grid" : "card-wrapper-list" }`}>
        {celebrityData.map( (celebrity) =>(<ComponentToRender key={celebrity.name} type={cardDisplay} onVoteChanged={onVoteChanged} imgSrc={celebrity.picture} imgAlt="Celebrity image" name={celebrity.name} description={celebrity.description} votes={celebrity.votes} category={celebrity.category} lastUpdated={celebrity.lastUpdated} />))}  
      </div>
    </div>
  )
}

export default App
