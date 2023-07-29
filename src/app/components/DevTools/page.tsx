import React from 'react';
import DevIcons from '../DevIcons/page';
import { stacks } from '../../data/technologies';
import './DevTools.modules.scss'

const DevTools = () => {
	return (
		<div className="technologies_container">
			<div>
				<h1>Technologies I know</h1>
				<DevIcons stacks={stacks.sort()} className={'largeIcon'} />
			</div>
		</div>
	);
};

export default DevTools;
