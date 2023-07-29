'use client'
import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { TextLoop } from 'react-text-loop-next';
import './About.modules.scss'

const About = () => {
	return (
		<div className="about">
			<div className="about_info">
				<h1>
					<TextLoop>
						<span style={{ color: 'var(--pink-color)' }}>Front-end Developer</span>
						<span style={{ color: '#ff8906' }}>Graphic Designer</span>
						<span style={{ color: '#4285F4' }}>Web Developer</span>
					</TextLoop>
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
