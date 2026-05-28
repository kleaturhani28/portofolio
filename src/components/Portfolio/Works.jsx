import React, { useState, useEffect } from 'react';
import WorkItems from './WorkItems';
import { projectsData, projectsNav } from './Data';

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(
                (project) => project.category.toLowerCase() === item.name
            );

            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (navItem, index) => {
        setItem({ name: navItem.name });
        setActive(index);
    };

    return (
        <div>
            <div className="work_filters">
                {projectsNav.map((navItem, index) => (
                    <button
                        type="button"
                        onClick={() => handleClick(navItem, index)}
                        className={`${active === index ? 'active-work' : ''} work_item`}
                        key={navItem.name}
                    >
                        {navItem.name}
                    </button>
                ))}
            </div>

            <div className="work_container container grid">
                {projects.map((project) => (
                    <WorkItems item={project} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default Works;