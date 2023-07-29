'use client'
import { projectType } from '@/app/interfaces';
import React from 'react';
import DevIcons from '../DevIcons/page';
import { LinkToNewTab } from '../Primitives/Links';
import { Tilt } from 'react-tilt';
import { Button, ButtonAlternate } from '../Primitives/Button';
import { RoundedImage } from '../Primitives/Images';

const ProjectCard = ({ title, content, link, image, direction, stack, github }: projectType) => {
	return (
		<div className="main" style={{ flexDirection: direction }}>
			<div className="description">
				<div className="cardText">
					<h1>{title}</h1>
					<h3>{content}</h3>
					<DevIcons className="devicon" stacks={stack} />
					<br />
					<LinkToNewTab href={link}>
						<Button>See Live</Button>
					</LinkToNewTab>
					{github && (
						<LinkToNewTab href={github}>
							<ButtonAlternate>View Code</ButtonAlternate>
						</LinkToNewTab>
					)}
				</div>
			</div>
			<div className="image">
				<Tilt className="Tilt" options={{ max: 10, scale: 1 }}>
					<div className="Tilt-inner">
						<div className="cardImageDiv">
							<RoundedImage src={`images/${image}`} alt="" />
						</div>
					</div>
				</Tilt>
			</div>
		</div>
	);
};

export default ProjectCard;
