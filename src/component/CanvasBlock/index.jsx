import React from 'react';
import classnames from 'classnames';
import { CanvasConsumer } from '~/context/canvas';
import S from './styles.scss';

let noop = () => {};

let StickyNote = ({ item, index, onClick = noop }) => (
  <li className={S.item} key={item + index} onClick={onClick}>
    {item}
  </li>
);

let makeProps = actions => (item, index) => ({
  item,
  index,
  onClick: actions.removeItem.bind(this, index)
});

let View = ({ Icon, name, key = name, items, actions }) => (
  <div className={S.container} key={key}>
    <header className={S.header}>
      <span className={S.name}>{name}</span>
      <img src={Icon} className="icon" width="40" />

      {/*
        
        <Icon className={S.icon} />
      */}
    </header>
    <ol className={S.items}>{items.map(makeProps(actions)).map(StickyNote)}</ol>
    <footer className={S.footer}>
      <button className={S.button} onClick={actions.addItem}>
        Add
      </button>
    </footer>
  </div>
);

export default ({ Icon, name }, index) => (
  <CanvasConsumer key={name + index}>
    {({ state, getBlockActions }) => (
      <View
        Icon={Icon}
        name={name}
        items={state[name]}
        actions={getBlockActions(name)}
      />
    )}
  </CanvasConsumer>
);
