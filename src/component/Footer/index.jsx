import React from 'react';
import classnames from 'classnames';
import S from './styles.scss';

export default () => (
  <div id="bottomnav" className={S.bottomnav + ' bg-white'}>
    <div className="mx-auto py-6 px-1">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <header id="headerTitle" class={S.header}>
            <a href="http://www.strongerstories.org" target="_blank">
              Stronger <br />
              Stories
            </a>
          </header>
        </div>

        <div className="mt-4 flex md:mt-0 md:ml-4">
          <span>strongerstories.org</span>
        </div>
      </div>
    </div>
  </div>
);
