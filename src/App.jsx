
import './App.css'
import { Card } from './components/CardGrid/CardGrid';
import { data } from './assets/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [celebrityData, setCelebrityData] = useState([]);
  const [cardDisplay, setCardDisplay] = useState("grid");

  useEffect(() => {
    console.log('data,', data)
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
  

  return (
    <div className="App">
      <div>Previous Rulings <select onChange={(event) => setCardDisplay(event.target.value)}>
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select></div>
      
      <div className={`card-wrapper ${cardDisplay === "grid" ? 'card-wrapper-grid' : 'card-wrapper-list' }`}>
        {celebrityData.map( (celebrity) =>(<Card key={celebrity.name} type={cardDisplay} onVoteChanged={onVoteChanged} imgSrc={celebrity.picture} imgAlt='card image' name={celebrity.name} description={celebrity.description} votes={celebrity.votes} category={celebrity.category} lastUpdated={celebrity.lastUpdated} />))}  
      </div>
    </div>
  )
}

export default App
