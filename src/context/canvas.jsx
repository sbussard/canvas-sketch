import React, { Component, createContext } from 'react';
import Modal from '~/component/Modal';
import { storyData } from '~/storydata.js';

const Context = createContext('canvas');
export const CanvasConsumer = Context.Consumer;

let emptyState = {
  'Everyday Hero': [],
  'Ordinary World': [],
  'Call to Adventure': [],
  'Better World': [],
  'Crossing the Threshold': [],
  'Allies and Gifts': [],
  'Mentor and Gifts': [],
  'Compelling Villain': [],
  'Three Challenges': []
};

export class UseCanvas extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.save = this.save.bind(this);
  }

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
      this.setState(prevState => ({
        ...prevState,
        currentBlock: block
      }));

      this.customPrompt('Add to the ' + block, storyData.sections[block]);
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

  customPrompt(text, block) {
    this.setState({
      showModal: true,
      modalmessage: text,
      block: block
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  save(item) {
    if (!!item && item.replace(/\ /g, '')) {
      this.updateBlock(this.state.currentBlock, state => [...state, item]);
    }

    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          getBlockActions: this.getBlockActions
        }}>
        {this.props.children}
        <Modal
          show={this.state.showModal}
          text={this.state.modalmessage}
          block={this.state.block}
          closeEvent={this.closeModal}
          saveEvent={this.save}
        />
      </Context.Provider>
    );
  }
}
