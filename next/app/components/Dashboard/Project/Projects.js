import Wrapper from "../Wrapper/Wrapper" 

import CompactCard from '../Card/CompactCard'

const Projects = () => { 
    const projects = [
        {
            name: 'Project 1',
            description: 'This is a project that I am working on with my family.',
            avatar: 'https://pbs.twimg.com/profile_images/1565900598028951553/YFH6gxAc_400x400.jpg',
            link: '',
        },
    ]

    return (
        <Wrapper>
            <div className="projects">
                <div className="projects__header">
                    <h1 className="projects__title">Projects</h1>
                </div>

                <div className="projects__list">
                    {projects.map((project, index) => (
                        <CompactCard   
                            key={index} 
                            avatar={project.avatar}
                            title={project.name}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default Projects;