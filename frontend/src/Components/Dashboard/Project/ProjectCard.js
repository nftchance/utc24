import { useState } from 'react';

import "../../../style/Dashboard/Project/ProjectCard.css";

const ProjectCard = ({ project: obj }) => {
    const [actionsOpen, setActionsOpen] = useState(false);

    return <div
        key={`project:${obj.name}`}
        target="_blank"
        rel="noreferrer"
    >
        <div className="project">
            <div className="project__header">
                <img
                    className="project__avatar"
                    src={obj.avatar}
                    alt={obj.name}
                />
                <h3 className="project__name">{obj.name}</h3>
            </div>

            <div className="project__body">
                <p className="project__description">{obj.description}</p>
            </div>
        </div>
    </div>
}

export default ProjectCard