/* eslint-disable react/prop-types */
import "./CardGrid.css";
import thumbsUp from './../../assets/img/thumbs-up.svg';
import thumbsDown from './../../assets/img/thumbs-down.svg';

export const Card = ({ 
    imgSrc,
    imgAlt, 
    name, 
    description, 
    lastUpdated,
    category,
    votes,
}) => {

  function getImageUrl(name) {
    return new URL(`../../assets/img/${name}`, import.meta.url).href
  }
  function getPercentage() {}

  function getAverageVotingIcon(votes) {
    return votes.positive > votes.negative ? thumbsUp : thumbsDown;
  }
  return (
      <div className ="card-container" style={{ backgroundImage: `url(${getImageUrl(imgSrc)})` }}>
        {/* <img src={getImageUrl(imgSrc)} alt={imgAlt}/> */}
        <h1 className="card-name"><img src={getAverageVotingIcon(votes)} /> {name}</h1>
        <p className="card-description">{description}</p>
        <p className="card-votes-caption" >{lastUpdated} in {category}</p>
        <p>thank you for your vote!</p>
        <div className="thumbs-votes" >
          <img src={thumbsUp} alt="thumbs-up-vote"/>
          <img src={thumbsDown} alt='thumbs-down-vote'/>
        </div>
        <div className="vote-percentage">
              <span>{votes.positive}%</span>
              <span>{votes.negative}%</span>
        </div>
      </div>
  );
};
