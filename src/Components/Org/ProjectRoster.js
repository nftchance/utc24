import { useEffect } from 'react';

const ProjectRoster = () => {
    // const [roster, setRoster] = useState([]);

    const roster = [{
        name: 'Nuclear Nerds',
        url: 'http://www.nuclearnerds.io/',
        description: 'Community-driven story world enabled by NFTs and blockchain tech.'
    }, {
        name: 'True Freeze',
        url: 'https://truefreeze.xyz/',
        description: 'Public good patience primitive locking ETH for yield on your patience.'
    }, { 
        name: 'Colorspace',
        url: 'http://colorspace.utc24.io',
        description: '3D color scale visualizer to create better digital palettes.'
    }, { 
        name: 'BFoundation',
        url: 'http://bfoundation.utc24.io',
        description: 'A third-party Foundation platform wrapper offering a viewer-tailored interface.'
    }]

    // useEffect(() => {
    //     const getRoster = () => {
    //         fetch('https://api.utc24.io/org/project-roster')
    //             .then(response => response.json())
    //             .then(data => setRoster(data))
    //     }

    //     getRoster();
    // }, [])

    return(
        <>
            {roster.map(obj => {
                return <a
                    key={`project:${obj.name}`}
                    href={obj.url} target="_blank" rel="noreferrer"
                >
                    <div className="project">
                        <h3>{obj.name}</h3>
                        <p>{obj.description}</p>

                        <strong>Enter</strong>
                    </div>
                </a>
            })} 
        </>
    )
}

export default ProjectRoster;