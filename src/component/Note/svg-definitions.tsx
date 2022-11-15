import React from 'react';

// Definition of sticky note path
// Added here to make it responsive
// https://stackoverflow.com/questions/28311741/responsive-clip-path-with-inline-svg/28312070#28312070
export default () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="stickyNotePathDefault" clipPathUnits="objectBoundingBox">
        <path d="M0 1s0-0 1-0c-0-0-0.04-0.1-.05-1H0c0 0 0 1 0.04 1Z" />
      </clipPath>
    </defs>
  </svg>
);
