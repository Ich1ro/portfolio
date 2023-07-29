import React from 'react';
import { projects } from '../../data/projects';

import ProjectCard from '../ProjectCard/page';

const Projects = () => {
	let dir_counter = 0,
	  direction: 'row' | 'row-reverse' = 'row';

	return (
		<div className="projects_container">
			<h1>My Projects</h1>
			{projects.map(project => {
				dir_counter++;
				if (dir_counter % 2 === 0) direction = 'row-reverse';
				else direction = 'row';
				return <ProjectCard {...project} direction={direction} key={dir_counter} />;
			})}
		</div>
	);
};

export default Projects;
