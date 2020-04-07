import React, { useContext } from 'react';
import { context } from 'state';
import S from './style.module.scss';

const renderStickyNote = (actions) => (item, index) => (
  <li
    className={S.item}
    key={item}
    item={item}
    onClick={actions.removeItem.bind(this, index)}>
    {item}
  </li>
);

let View = ({ Icon, name, items, actions }) => (
  <div className={S.container}>
    <header className={S.header}>
      <span className={S.name}>{name}</span>
      <Icon className={S.icon} />
    </header>
    <ol className={S.items}>{items.map(renderStickyNote(actions))}</ol>
    <footer className={S.footer}>
      <button className={S.button} onClick={actions.addItem}>
        Add
      </button>
    </footer>
  </div>
);

export default ({ Icon, name }) => {
  const { state, getBlockActions } = useContext(context);

  return (
    <View
      Icon={Icon}
      name={name}
      items={state[name]}
      actions={getBlockActions(name)}
    />
  );
};
