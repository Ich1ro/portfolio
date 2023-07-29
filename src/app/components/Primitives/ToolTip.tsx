'use client'
import { FC, ReactNode, ReactElement } from 'react';
import { Tooltip } from 'react-tooltip';

interface Props {
	id?: string;
	content?: ReactNode;
	children: ReactElement;
}

const ToolTip = ({ id, content, children }: Props) => (
	<>
    {children}
    <Tooltip
      id={id}
      place='bottom'
      variant='info'
      className='tooltip'
    >
      {content}
    </Tooltip>
  </>
);

export default ToolTip;
