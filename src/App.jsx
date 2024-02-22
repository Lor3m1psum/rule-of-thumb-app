
import { useEffect, useState } from 'react';
import { CardGrid } from './components/CardGrid/CardGrid';
import { CardList } from './components/CardList/CardList';
import Slider from 'react-slick';
import { useWindowSize } from '@uidotdev/usehooks';
import { data } from './assets/data.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'

function App() {
  const size = useWindowSize();
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

  useEffect(() => {
    if (size.width < 768 && cardDisplay !== "grid") {
      setCardDisplay("grid");
    }
  }, [size.width, cardDisplay])

  const onVoteChanged = ({ name, newVotes }) => {
    const updatedCelebrities = celebrityData.map(celebrity => celebrity.name === name ? {...celebrity, votes: newVotes} : celebrity);
    setCelebrityData(updatedCelebrities);
    localStorage.setItem("savedData", JSON.stringify(updatedCelebrities));
  }
  
  const ComponentToRender = cardDisplay === "grid" ? CardGrid : CardList;
  const cards = celebrityData.map( (celebrity) =>(<ComponentToRender key={celebrity.name} type={cardDisplay} onVoteChanged={onVoteChanged} imgSrc={celebrity.picture} imgAlt="Celebrity image" name={celebrity.name} description={celebrity.description} votes={celebrity.votes} category={celebrity.category} lastUpdated={celebrity.lastUpdated} />))
  const settings = {
    arrows: false,
    slidesToShow: 1.2,
    infinite: false,
  };
  return (
    <div className="App">
      <div className="select-view">Previous Rulings <select value={cardDisplay} className="select-style" onChange={(event) => setCardDisplay(event.target.value)}>
        <option className="select-option" value="grid">Grid</option>
        <option className="select-option" value="list">List</option>
      </select></div>
      <div className={`card-wrapper ${cardDisplay === "grid" ? "card-wrapper-grid" : "card-wrapper-list" }`}>
        {size.width < 768 ?
        <Slider {...settings}>
          {cards}</Slider> :
        cards
        }
      </div>
    </div>
  )
}

export default App
