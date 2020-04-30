import React, { Component, PropTypes } from 'react';
import '~/theme/base.scss';

import '~/scss/tailwind.css';

import Canvas from '~/component/Canvas';
import Modal from '~/component/Modal';

import NavBar from '~/component/NavBar';

//render(<NavBar><Canvas /></NavBar>, document.querySelector('.app'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="App">
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
        <Canvas />
      </div>
    );
  }
}

export default App;
