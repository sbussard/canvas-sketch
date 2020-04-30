import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      newcontent: '',
      text: props.text,
      closeEvent: props.closeEvent
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      text: nextProps.text,
      closeEvent: nextProps.closeEvent
    });
  }

  closeModal() {
    this.setState({
      show: false,
      newcontent: '',
      text: this.props.text,
      closeEvent: this.props.closeEvent
    });
    this.props.closeEvent();
  }

  render() {
    let show = this.props.show ? true : false;

    // Render nothing if the "show" prop is false
    if (!show) {
      return null;
    }

    return (
      <div
        x-data="{ open: true }"
        x-show="open"
        className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
        <div x-show="open" className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>

        <div
          x-show="open"
          className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12">
              <img src={this.props.block.icon} className="icon" width="60" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                <header className="header">
                  {this.state.text}
                  <br />
                </header>
              </h3>
              <div className="w-full">
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p className="mt-2 text-sm text-gray-500">
                    {this.props.block.guidance}
                  </p>
                  <br />
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <textarea
                      autoFocus
                      id="newcontent"
                      name="newcontent"
                      rows={3}
                      className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      defaultValue={''}
                      onChange={e => this.handleInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={() => this.props.saveEvent(this.state.newcontent)}>
                Add
              </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={() => this.closeModal()}>
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  closeEvent: PropTypes.func,
  children: PropTypes.node
};

export default Modal;
