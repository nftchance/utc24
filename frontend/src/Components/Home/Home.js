import React from 'react';

import DiscordButton from './DiscordButton';
import TwitterButton from './TwitterButton';

import ProjectRoster from '../Roster/ProjectRoster';
import Roster from "../Roster/Roster";

import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="hero">
                    <div className="content">
                        <h1>UTC±24: The Home Of Web3 Focused Professionals</h1>
                        <p className="lead">A digital family focused on redefining the way groups work towards creating incredible things.</p>

                        <DiscordButton />
                        <TwitterButton />
                    </div>
                </div>

                <ProjectRoster />
                <Roster />

                <div className="cta">
                    <h2>Think You Would Be A Good Fit?</h2>
                    <p className="lead">With no application fee or primary focus of revenue generation, UTC±24 is always open and focused on building a family of incredibly talented and passionate people.</p>

                    <DiscordButton />
                </div>
            </div>
        </div>
    )
}

export default Home;