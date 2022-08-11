import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import "./Home.css";

library.add(fab)

const Home = () => {
    const projects = [{
        name: 'Nuclear Nerds',
        url: 'http://www.nuclearnerds.io/',
        description: 'Community-driven story world enabled by NFTs and blockchain tech.'
    }, {
        name: 'True Freeze',
        url: 'https://truefreeze.xyz/',
        description: 'Public good patience primitive locking ETH for yield on your patience.'
    }, {
        name: 'Scooper',
        url: 'http://scooper.utc24.io',
        description: 'Save the NFTs and ETH sitting in a compromised Ethereum wallet.'
    }, { 
        name: 'Colorspace',
        url: 'http://colorspace.utc24.io',
        description: '3D color scale visualizer to create better digital palettes.'
    }, { 
        name: 'BFoundation',
        url: 'http://bfoundation.utc24.io',
        description: 'A third-party Foundation platform wrapper offering a viewer-tailored interface.'
    }]

    const members = [{
        name: 'CHANCE',
        url: 'https://twitter.com/nftchance/',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1533321078960967681/sxYQ9OIu_400x400.jpg'
    }, {
        name: 'MasonTheChain',
        url: 'https://twitter.com/MasOnTheChain',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1544418511237386242/uOdrCu_J_400x400.png'
    }, {
        name: 'ArtGhost',
        url: 'https://twitter.com/the_art_ghost',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1542914984275021829/6qOVtPJS_400x400.jpg'
    }, {
        name: 'Jerseyborn',
        url: 'https://twitter.com/SeanSemola',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1539265807959588864/wf4r7fzN_400x400.jpg'
    }, {
        name: 'danner',
        url: 'https://twitter.com/drakedanner',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1543463296858202113/EbDRCHBm_400x400.png'
    }, {
        name: 'LoganOP',
        url: 'https://twitter.com/LoganOP_gm',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1536857071026683906/pZExsxmT_400x400.jpg'
    }, {
        name: 'ql-crypto',
        url: 'https://twitter.com/ql_crypto',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1488197535151890438/5V0Asl3f_400x400.jpg'
    }, {
        name: 'jack',
        url: 'https://twitter.com/jack_forlines',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1534210600175341569/aiUai8kU_400x400.png'
    }, {
        name: 'Jenesis',
        url: 'https://twitter.com/jenesisquoi',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1534739338965270531/p8FVX8x3_400x400.jpg'
    }, {
        name: 'Maclunkey',
        url: 'https://twitter.com/TheMaclunkster',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1542147124770603008/T0vscm8t_400x400.jpg'
    }, {
        name: 'segwitnitwit',
        url: 'https://twitter.com/segwitnitwit',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1544176495106707456/cpcx0SSA_400x400.jpg'
    }, {
        name: 'banterlytics',
        url: 'https://twitter.com/banterlytics',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1529515332674666496/U42WUkT1_400x400.jpg'
    }, {
        name: 'bg',
        url: 'https://twitter.com/bg_alt',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1430741853876359168/1Z6PHM-5_400x400.jpg'
    }, {
        name: 'Bhavin',
        url: 'https://twitter.com/RBhavinVaid',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1519322539922763779/y-G_XkkD_400x400.png'
    }, {
        name: 'charliemarketplace',
        url: 'https://twitter.com/charliemktplace',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1537556881819983877/gRYfo8DV_400x400.jpg'
    }, {
        name: 'dfranco',
        url: 'https://twitter.com/0xfranon',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1513939446848266250/AfGNgDMp_400x400.jpg'
    }, {
        name: 'Jonny',
        url: 'https://twitter.com/JonnyThe4th',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1428770158978510849/d_w8uXQ3_400x400.jpg'
    }]

    return (
        <div className="home">
            <div className="container">
                <div className="hero">
                    <div className="content">
                        <h1>UTC±24: The Home Of Web3 Focused Professionals</h1>
                        <p className="lead">A digital family focused on redefining the way groups work towards creating incredible things.</p>

                        <a 
                            href="https://discord.gg/ftQyGT7Hfe"
                            className="button"
                            target="_blank"
                            rel="noreferrer"
                        >
                            APPLY NOW  
                        </a>
                        <a
                            href="https://twitter.com/utc_24"
                            className="button secondary"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                marginLeft: 15
                            }}
                        >
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                </div>

                <h2 style={{
                    position: "relative",
                    zIndex: 2
                }}>GALAXIES BEING EXPLORED</h2>
                <p className="lead">At UTC±24 the primary focus lies within positive impact and that brings a vast universe to wonder.</p>

                <div className="projects">
                    {projects.map((project, idx) => {
                        return <a
                            key={`project:${idx}`}
                            href={project.url} target="_blank" rel="noreferrer"
                        >
                            <div className="project">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>

                                <strong>Enter</strong>
                            </div>
                        </a>
                    })}
                </div>

                <h2>THE MEMBERS</h2>
                <p className="lead">The members of UTC±24 are from all around the world, but we all share one thing in common. A massive interest in building the future of Web3.</p>

                <div className="members">
                    {members.map((member, idx) => {
                        return <a
                            key={`member:${idx}`}
                            href={member.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {/* Purposefully missing information to increase click-through rates ╰(*°▽°*)╯ */}
                            <div
                                className="member"
                                style={{
                                    backgroundImage: `url(${member.image})`
                                }}
                            ></div>
                        </a>
                    })}
                </div>

                <div className="cta">
                    <h2>Think You Would Be A Good Fit?</h2>
                    <p className="lead">With no application fee or primary focus of revenue generation, UTC±24 is always open and focused on building a family of incredibly talented and passionate people.</p>

                    <a 
                        href="https://discord.gg/ftQyGT7Hfe"
                        target="_blank"
                        rel="noreferrer"
                        className="button"
                    >
                        SUBMIT APPLICATION
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;