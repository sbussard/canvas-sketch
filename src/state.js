import React, { createContext, useState } from 'react';

const saveCanvas = (data) => {
  localStorage.canvas = btoa(
    unescape(encodeURIComponent(JSON.stringify(data)))
  );
};

const blankCanvas = {
  'Key Partnerships': [],
  'Key Activities': [],
  'Key Resources': [],
  'Value Propositions': [],
  'Customer Relationships': [],
  'Channels': [],
  'Customer Segments': [],
  'Cost Structure': [],
  'Revenue Streams': []
};

const loadCanvas = () =>
  localStorage.canvas
    ? JSON.parse(decodeURIComponent(escape(atob(localStorage.canvas))))
    : blankCanvas;

export const context = createContext('canvas');
export const Provider = ({ children }) => {
  const [state, setState] = useState(loadCanvas());

  const updateBlock = (block, getNewState) => {
    const newState = Object.assign({}, state, {
      [block]: getNewState(state[block])
    });
    setState(newState);
    saveCanvas(newState);
  };

  const getBlockActions = (block) => ({
    addItem: () => {
      let item = prompt(`Enter new ${block} item`);

      if (!!item && item.replace(/ /g, '')) {
        updateBlock(block, (state) => [...state, item]);
      }
    },
    removeItem: (item) => {
      if (window.confirm('Remove item?')) {
        updateBlock(block, (state) =>
          state.filter((_, index) => index !== item)
        );
      }
    }
  });

  const value = {
    state,
    getBlockActions
  };

  return <context.Provider value={value} children={children} />;
};
