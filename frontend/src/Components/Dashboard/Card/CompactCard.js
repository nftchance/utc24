import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import '../../../style/Dashboard/Card/CompactCard.css'

const CompactCard = ({ avatar, title, description, link }) => {
    const truncateLength = 80;

    return (
        <div className="compact__card">
            <div className="compact__card__header">
                <img src={avatar} alt="avatar" className="compact__card__avatar" />

                <div className="compact__card__header__info">
                    <h3 className="compact__card__title">{title}</h3>
                    <p className="compact__card__description">
                        {description.substring(0, truncateLength)}
                        {description.length > truncateLength && '...'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CompactCard