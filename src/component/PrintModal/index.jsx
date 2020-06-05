import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import S from './styles.scss';

class PrintModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      closeEvent: props.closeEvent
    };
  }

  closeModal() {
    this.setState({
      show: false,
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
            {/* <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div> */}
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                <header className="header">
                  <span className={S.title}>Print or Save your Canvas</span>
                  <br />
                </header>
              </h3>
              <div className="w-full">
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <br />
                  <p className="mt-2 text-sm text-gray-500 text-left">
                    Click on the Print button below, this will pop-up the print
                    options. <br />
                    <br />
                    We recommended printing Landscape on A4 papersize. <br />
                    <br />
                    In most browsers, you'll also be able to Print to PDF.{' '}
                    <br />
                    This will create a PDF file of your canvas that you can then
                    share with others.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={() => {
                  this.closeModal();
                  window.print();
                }}>
                Print
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

PrintModal.propTypes = {
  show: PropTypes.bool,
  closeEvent: PropTypes.func,
  children: PropTypes.node
};

export default PrintModal;
