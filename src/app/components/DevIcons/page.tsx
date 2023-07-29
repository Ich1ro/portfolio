'use client';
import React from 'react';
import { Technology } from '@/app/interfaces';
import { Technologies } from '@/app/data/technologyInfo';
import { LinkToNewTab } from '../Primitives/Links';
import ToolTip from '../Primitives/ToolTip';

const DevIcons = ({ stacks, className }: any) => {
	const rest = {
		style: { stroke: 'var(--text-color)', strokeWidth: 0.3, cursor: 'pointer' }
	};

	const icons = stacks?.map((s: any) => {
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
						className={className}
						{...rest}
					/>
				</LinkToNewTab>
			</ToolTip>
		);
	});

	return <div style={{ margin: '0 10px' }}>{icons}</div>;
};
export default DevIcons;
