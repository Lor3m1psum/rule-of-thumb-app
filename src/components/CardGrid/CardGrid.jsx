/* eslint-disable react/prop-types */
import "./CardGrid.css";
import thumbsUp from './../../assets/img/thumbs-up.svg';
import thumbsDown from './../../assets/img/thumbs-down.svg';
import ThumbIcon from "../ThumbIcon/ThumbIcon";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

export const Card = ({ 
    type = "grid", 
    imgSrc,
    name, 
    description, 
    lastUpdated,
    category,
    votes,
    onVoteChanged
}) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [isActive, setIsActive] = useState("")

  function getImageUrl(name) {
    return new URL(`../../assets/img/${name}`, import.meta.url).href
  }

  function getVotingAverageStyles(votes) {
    return votes.positive > votes.negative ? { iconSrc: thumbsUp  } : { iconSrc: thumbsDown }
  }

  const votingAverageStyles = getVotingAverageStyles(votes);
  const totalVotes = votes.positive + votes.negative;
  const votesInFavor = Math.round((votes.positive * 100 / totalVotes) * 10) / 10;
  const votesAgainst = Math.round((votes.negative * 100 / totalVotes) * 10) / 10;

  function getLastUpdatedFormat(date) {
    return formatDistanceToNow(date, { addSuffix: true });
  }


  return (
      <div className={`card-container card-container${type === "grid" ? "-grid" : "-list"}`} style={{ backgroundImage: `url(${getImageUrl(imgSrc)})` }}>
        <h1 className={`card-name card-name${type === "grid" ? "-grid" : "-list"}`}>
          <ThumbIcon iconSrc={votingAverageStyles.iconSrc} type={votes.positive > votes.negative ? 'positive' : 'negative'} />{name}
        </h1>
        <p className={`card-description card-description${type === "grid" ? "-grid" : "-list"}`}>{description}</p>

        <div className="thumbs-votes">
        {hasVoted ?
          <>
            <p className="card-votes-caption">thank you for your vote!</p>
            <button className="vote-button" onClick={() => setHasVoted(false)}>Vote Again</button>
          </> :
          <>
            <p className="card-votes-caption">{getLastUpdatedFormat(lastUpdated)} in {category}</p>
            <div className="vote-buttons-container">
              <ThumbIcon iconSrc={thumbsUp} type="positive" isActive={isActive === "positive"} onClick={() => setIsActive("positive")} />
              <ThumbIcon iconSrc={thumbsDown} type="negative" isActive={isActive === "negative"} onClick={() => setIsActive("negative")} />
              <button className="vote-button" onClick={() => {
                setHasVoted(true);
                setIsActive("");
                const newVotes = {
                  positive: isActive === "positive" ? votes.positive + 1 : votes.positive,
                  negative: isActive === "negative" ? votes.negative + 1 : votes.negative
                };
                onVoteChanged({ name, newVotes });
              }}
              disabled={!isActive}>Vote Now</button>
            </div>
          </>
        }
        </div>
        <div className="vote-percentage">
            <span className="vote-percentage-positive" style={{ width: `${votesInFavor}%` }}><img className="vote-percentage-icon" src={thumbsUp} /> {votesInFavor}%</span>
            <span className="vote-percentage-negative" style={{ width: `${votesAgainst}%` }}>{votesAgainst}% <img className="vote-percentage-icon" src={thumbsDown} /></span>
        </div>
      </div>
  );
};