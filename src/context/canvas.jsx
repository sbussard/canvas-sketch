import React, { Component, createContext } from 'react';

const Context = createContext('canvas');
export const CanvasConsumer = Context.Consumer;

let emptyState = {
  'Key Partnerships': [],
  'Key Activities': [],
  'Key Resources': [],
  'Value Propositions': [],
  'Customer Relationships': [],
  Channels: [],
  'Customer Segments': [],
  'Cost Structure': [],
  'Revenue Streams': []
};

export class UseCanvas extends Component {
  state = emptyState;

  updateBlock(block, getNewState) {
    let updater = fullState =>
      Object.assign({}, fullState, {
        [block]: getNewState(fullState[block])
      });

    let saveCanvas = () => {
      localStorage.canvas = btoa(
        unescape(encodeURIComponent(JSON.stringify(this.state)))
      );
    };

    this.setState(updater, saveCanvas);
  }

  getBlockActions = block => ({
    addItem: () => {
      let item = prompt(`Enter new ${block} item`);

      if (!!item && item.replace(/\ /g, '')) {
        this.updateBlock(block, state => [...state, item]);
      }
    },
    removeItem: item => {
      if (confirm('Remove item?')) {
        this.updateBlock(block, state =>
          state.filter((_, index) => index !== item)
        );
      }
    }
  });

  componentDidMount() {
    if (localStorage.canvas) {
      this.setState(state =>
        JSON.parse(decodeURIComponent(escape(atob(localStorage.canvas))))
      );
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          getBlockActions: this.getBlockActions
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
