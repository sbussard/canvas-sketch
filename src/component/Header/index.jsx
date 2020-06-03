import React from 'react';
import classnames from 'classnames';
import S from './styles.scss';

export default () => (
  <nav id="topnav" className="print:hidden bg-white border-b border-gray-200">
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
            onClick={() => window.print()}
            className={S.ssbutton + ' inline-flex items-center px-6'}>
            Print
          </button>
        </div>
      </div>
    </div>
  </nav>
);
