
import './App.css'
import { Card } from './components/CardGrid/CardGrid';
import { data } from './assets/data.json';

function App() {

  return (
    <div className="App">
      {data.map( (celebrity) =>(<Card key={celebrity.name} imgSrc={celebrity.picture} imgAlt='card image' name={celebrity.name} description={celebrity.description} votes={celebrity.votes} category={celebrity.category} lastUpdated={celebrity.lastUpdated} />))}
    </div>
  )
}

export default App
