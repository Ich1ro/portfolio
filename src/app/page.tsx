'use client';
import { Suspense, lazy, useRef, useState, useEffect, useCallback } from 'react';
import { tsParticlesConfig } from './data/tsParticles';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { IOptions, RecursivePartial } from 'tsparticles-engine';

export default function Home() {
	const particlesInit = useCallback(async (engine: any) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: any) => {
		await console.log(container);
	}, []);

	const [particles] = useState(tsParticlesConfig as unknown as RecursivePartial<IOptions>);

	return (
		<div>
			<Particles
				init={particlesInit}
				loaded={particlesLoaded}
				options={particles}
				height="100vh"
				width="100vw"
			/>
		</div>
	);
}
