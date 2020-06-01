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
          <span className="shadow-sm rounded-md">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
              Print
            </button>
          </span>
        </div>
      </div>
    </div>
  </nav>
);
