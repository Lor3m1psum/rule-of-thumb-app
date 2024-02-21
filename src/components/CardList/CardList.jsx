/* eslint-disable react/prop-types */
import "./CardList.css";
import thumbsUp from './../../assets/img/thumbs-up.svg';
import thumbsDown from './../../assets/img/thumbs-down.svg';
import ThumbIcon from "../ThumbIcon/ThumbIcon";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

export const CardList = ({ 
    imgSrc,
    imgAlt,
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
      <div className="card-list-container" role="img" aria-label={imgAlt} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%), url(${getImageUrl(imgSrc)})`}}>
        <div className="flex-container">
          <ThumbIcon size="big" iconSrc={votingAverageStyles.iconSrc} type={votes.positive > votes.negative ? 'positive' : 'negative'} />
          <div className="name-container">
            <h1 className="card-list-name">{name}</h1>
            <p className="card-list-description">{description}</p>
          </div>
          <div className="thumbs-list-votes">
          {hasVoted ?
            <>
              <p className="card-list-votes-caption">thank you for your vote!</p>
              <button className="vote-list-button" onClick={() => setHasVoted(false)}>Vote Again</button>
            </> :
            <>
              <p className="card-list-votes-caption">{getLastUpdatedFormat(lastUpdated)} in {category}</p>
              <div className="vote-list-buttons-container">
                <ThumbIcon size="big" iconSrc={thumbsUp} type="positive" isActive={isActive === "positive"} onClick={() => setIsActive("positive")} />
                <ThumbIcon size="big"iconSrc={thumbsDown} type="negative" isActive={isActive === "negative"} onClick={() => setIsActive("negative")} />
                <button className="vote-list-button" onClick={() => {
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
        </div>

        <div className="vote-list-percentage">
            <span className="vote-list-percentage-positive" style={{ width: `${votesInFavor}%` }}><img className="vote-list-percentage-icon" src={thumbsUp} /> {votesInFavor}%</span>
            <span className="vote-list-percentage-negative" style={{ width: `${votesAgainst}%` }}>{votesAgainst}% <img className="vote-list-percentage-icon" src={thumbsDown} /></span>
        </div>
      </div>
  );
};