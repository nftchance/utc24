import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../../../style/Dashboard/Member/MemberCard.css";

const MemberCard = ({ member: obj }) => {
    return (
        <>
            {
                obj.name && <div className="member">
                    <div className="member__header">
                        <img src={obj.avatar} alt="avatar" className="member__avatar" />

                        <div className="member__header__info">
                            <h3 className="member__name">{obj.name}</h3>
                            <p className="member__bio">{obj.bio}</p>

                            <div className="member__pills">
                                <div className="member__social">
                                    {obj.badge &&
                                        <a
                                            href={obj.badge}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon icon={["fab", "discord"]} />
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MemberCard