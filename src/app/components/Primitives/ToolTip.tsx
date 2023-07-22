import { FC, ReactNode, ReactElement } from 'react';
import { Tooltip } from 'react-tooltip';

interface Props {
	id?: string;
	content?: ReactNode;
	children: ReactElement;
}

const ToolTip: FC<Props> = ({ id, content, children }) => (
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
