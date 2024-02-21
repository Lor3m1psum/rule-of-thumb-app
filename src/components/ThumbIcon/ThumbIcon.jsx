/* eslint-disable react/prop-types */
import "./ThumbIcon.css"

export default function ThumbIcon({ iconSrc, type, size="small", isActive = false, onClick = () => {} }) {
    const getTypeClass = (voteType) => {
        switch(voteType) {
            case 'positive':
                return 'thumb-positive';
            case 'negative':
                return 'thumb-negative';
            default:
                return '';
        }
    }

    return (
        <div className={`thumb-container ${ size ==="small" ? "thumb-container-small" : "thumb-container-big"} ${getTypeClass(type)} ${isActive ? 'thumb-active' : ''}`} onClick={onClick} role="button">
            <img src={iconSrc} alt="" />
        </div>
    )
}