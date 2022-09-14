import { useEffect, useState } from 'react';

const ProjectRoster = () => {
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        const getRoster = () => {
            fetch('members/')
                .then(response => response.json())
                .then(data => setRoster(data))
        }

        getRoster();
    }, [])

    return (
        <>
            {roster.map(obj => {
                return <a
                    key={`project:${obj.name}`}
                    href={obj.url} 
                    target="_blank" 
                    rel="noreferrer"
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