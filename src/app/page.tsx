'use client';
import dynamic from 'next/dynamic';
import { Triangle } from 'react-loader-spinner';

import About from './components/About/page';
import SocialMedia from './components/SocialMedia/page';
import Form from './components/Form/page';

const TriangleLoader = () => {
	return (
		<Triangle
			height="80"
			width="80"
			color="#ff8ba7"
			ariaLabel="triangle-loading"
			wrapperStyle={{ display: 'flex', justifyContent: 'center', padding: '15px' }}
			visible={true}
		/>
	);
};

const Particles = dynamic(() => import('./components/ParticlesWrapper/page'), { ssr: false });
const DevTools = dynamic(() => import('./components/DevTools/page'), {
	ssr: false,
	loading: () => <TriangleLoader />
});
const Projects = dynamic(() => import('./components/Projects/page'), {
	ssr: false,
	loading: () => <TriangleLoader />
});

export default function Home() {
	return (
		<div className="container">
			<Particles />
			<About />
			<DevTools />
			<Projects />
			<Form />
			<SocialMedia />
		</div>
	);
}
