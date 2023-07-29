'use client';
import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './About.modules.scss';

const About = () => {
	return (
		<div className="about">
			<div className="about_info">
				<h1>
					<Typewriter
						options={{
							strings: ['Web Developer', 'Front-end Developer', 'Graphic Designer'],
							autoStart: true,
							loop: true
						}}
					/>
				</h1>
				<p>{`Hi, I'm Ich1ro. A passionate Web Developer based in Ukraine. 📍`}</p>
				<div className="resume">
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
						Resume <FaCloudDownloadAlt className="tooltip-svg" />
					</a>
				</div>
			</div>
			<div className="about_img"></div>
		</div>
	);
};

export default About;
