import { useQuery } from 'react-query';

import { fetchProjects } from '../Controllers/Api';

const ProjectRoster = () => {
    const query = useQuery(['projects'], fetchProjects);

    return (
        query.data &&
        query.data?.length !== 0 &&
        <>
            <h2 style={{
                position: "relative",
                zIndex: 2
            }}>GALAXIES BEING EXPLORED</h2>
            <p className="lead">At UTC±24 the primary focus lies within positive impact and that brings a vast universe to wonder.</p>

            <div className="projects">
                {query.data.map(obj => {
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
            </div>
        </>
    )
}

export default ProjectRoster;