import React, { Component } from 'react';
import PrintModal from '~/component/PrintModal';
import classnames from 'classnames';
import S from './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.closePrintModal = this.closePrintModal.bind(this);
    this.state = {
      showPrintModal: false
    };
  }

  closePrintModal() {
    this.setState({
      showPrintModal: false
    });
  }

  render() {
    return (
      <nav
        id="topnav"
        className="print:hidden bg-white border-b border-gray-200">
        <div className="mx-auto p-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <header id="headerTitle">
                <a href="http://www.strongerstories.org" target="_blank">
                  Stronger <br />
                  Stories
                </a>
              </header>
            </div>

            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                onClick={() => this.setState({ showPrintModal: true })}
                className={S.ssbutton + ' inline-flex items-center px-6'}>
                Print / Save
              </button>
            </div>
          </div>
        </div>
        <PrintModal
          show={this.state.showPrintModal}
          closeEvent={this.closePrintModal}
        />
      </nav>
    );
  }
}

export default Header;
