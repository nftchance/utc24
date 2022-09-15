import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wrapper from '../Wrapper/Wrapper';
import CompactCard from '../Card/CompactCard';

import Pill from '../Pill/Pill';

import "../../../style/Dashboard/Profile/Profile.css";

const Profile = () => {
    const profile = {
        name: 'John Doe',
        bio: 'I am a farmer that lives in Conneticut. Love getting down and dirty with the Web3 family.',
        avatar: 'https://pbs.twimg.com/profile_images/1565900598028951553/YFH6gxAc_400x400.jpg',
        birthday: new Date('1999-01-01'),
        social: {
            twitter: {
                icon: ['fab', 'twitter'],
                link: ''
            },
            github: {
                icon: ['fab', 'github'],
                link: ''
            },
        },
        family: {
            role: '',
            projects: [
                {
                    name: 'Project 1',
                    description: 'This is a project that I am working on with my family.',
                    avatar: 'https://pbs.twimg.com/profile_images/1565900598028951553/YFH6gxAc_400x400.jpg',
                    link: '',
                },
            ],
            grants: []
        },
        season: {
            badge: {
                icon: ['fas', 'seedling'],
                generation: 0,
                generationColor: 'red',
                gold: 0,
                daysSinceMinting: 0,
            },
            points: 0,
            rank: 0,
            season: 0,
            gold: 0,
        }
    }

    return (
        <Wrapper>
            <div className="profile">
                <div className="profile__header">
                    <img src={profile.avatar} alt="avatar" className="profile__header__avatar" />

                    <div className="profile__header__info">
                        <h1 className="profile__name">{profile.name}</h1>
                        <p className="profile__bio">{profile.bio}</p>

                        <div className="profile__pills">
                            <p className="profile__birthday">
                                <FontAwesomeIcon icon={['far', 'cake']} />
                                {profile.birthday.toLocaleDateString()}
                            </p>

                            <div className="profile__social">
                                {Object.entries(profile.social).map(([socialName, social]) => (
                                    <a href={social.link} target="_blank" rel="noreferrer" className="profile__header__info__social__link">
                                        <FontAwesomeIcon icon={social.icon} />
                                        {String(socialName).charAt(0).toUpperCase() + String(socialName).slice(1)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile__season">
                    <h2>Season Badge</h2>
                    <div className="profile__season__info">
                        <div className="profile__badge">
                            <img src={profile.season.badge} alt="badge" />
                        </div>

                        <div className="profile__badge__info">
                            <h3>Season {profile.season.season}</h3>
                            <p>Rank {profile.season.rank}</p>

                            <div className="profile__badge__metadata">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile__projects">
                    <h2>Projects</h2>

                    {profile.family.projects.map(project => (
                        <CompactCard
                            title={project.name}
                            description={project.description}
                            avatar={project.avatar}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default Profile;