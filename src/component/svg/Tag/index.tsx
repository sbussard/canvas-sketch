import React, { SVGProps } from 'react';
import cn from 'src/utility/cn';
import './style.scss';

export default ({ className, ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    {...svgProps}
    className={cn('MonoIcon-Tag', className)}
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3C2 2.44772 2.44772 2 3 2H11C11.2652 2 11.5196 2.10536 11.7071 2.29289L21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071L13.7071 21.7071C13.3166 22.0976 12.6834 22.0976 12.2929 21.7071L2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V3ZM4 4V10.5858L13 19.5858L19.5858 13L10.5858 4H4Z"
    />
    <path d="M9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5Z" />
  </svg>
);
