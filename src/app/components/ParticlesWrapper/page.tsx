import React, {useCallback, useState} from 'react';
import Particles from 'react-tsparticles';
import { tsParticlesConfig } from '../../data/tsParticles';
import { loadFull } from 'tsparticles';
import { IOptions, RecursivePartial } from 'tsparticles-engine';
import './ParticlesWrapper.modules.scss'

const ParticlesWrapper = () => {
    const particlesInit = useCallback(async (engine: any) => {
		await loadFull(engine);
	}, []);

	const [particles] = useState(tsParticlesConfig as unknown as RecursivePartial<IOptions>);
	return (
		<>
			<Particles
				init={particlesInit}
				options={particles}
				height="100vh"
				width="100vw"
				className="particles"
			/>
		</>
	);
};

export default ParticlesWrapper;
