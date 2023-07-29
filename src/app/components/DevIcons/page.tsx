import React from 'react';
import { stackTypes, Technology } from '@/app/interfaces';
import { Technologies } from '@/app/data/technologyInfo';
import { LinkToNewTab } from '../Primitives/Links';
import ToolTip from '../Primitives/ToolTip';

interface Props {
	stacks: stackTypes[];
	className: string;
}

const DevIcons = ({ stacks, className }: Props) => {
	const rest = {
		className,
		style: { stroke: 'var(--text-color)', strokeWidth: 0.3, cursor: 'pointer' }
	};

	const icons = stacks.map(s => {
		const Component = Technologies.find(t => t.name === s) as Technology;
		return (
			<ToolTip
				key={Component.name}
				id={`icon-${s}`}
				content={
					<>
						<h4>{Component.name}</h4>
						<p>{Component.description}</p>
					</>
				}>
				<LinkToNewTab href={Component.url}>
					<Component.Icon
						href={Component.url}
						data-tooltip-id={`icon-${s}`}
						fill={Component.primaryColor}
						{...rest}
					/>
				</LinkToNewTab>
			</ToolTip>
		);
	});

	return <div style={{ margin: '0 10px' }}>{icons}</div>;
};
export default DevIcons;
