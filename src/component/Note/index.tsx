import './styles.scss';

import type { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default ({ text, ...containerProps }: Props) => (
  <div {...containerProps} className="Note">
    <div className="Note-content">
      <div className="Note-text">{text}</div>
    </div>
  </div>
);
