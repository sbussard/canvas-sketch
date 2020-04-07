import React from 'react';
import CanvasBlock from 'component/CanvasBlock';
import ClipboardIcon from 'component/icon/Clipboard';
import FeedIcon from 'component/icon/Feed';
import HeartIcon from 'component/icon/Heart';
import LinkIcon from 'component/icon/Link';
import MoneyIcon from 'component/icon/Money';
import PaintRollerIcon from 'component/icon/PaintRoller';
import PeopleIcon from 'component/icon/People';
import PriceTagIcon from 'component/icon/PriceTag';
import SmileyFaceIcon from 'component/icon/SmileyFace';
import S from './style.module.scss';

let names = [
  'Key Partnerships',
  'Key Activities',
  'Key Resources',
  'Value Propositions',
  'Customer Relationships',
  'Channels',
  'Customer Segments',
  'Cost Structure',
  'Revenue Streams'
];

let icons = [
  LinkIcon,
  ClipboardIcon,
  PaintRollerIcon,
  SmileyFaceIcon,
  HeartIcon,
  FeedIcon,
  PeopleIcon,
  PriceTagIcon,
  MoneyIcon
];

const renderBlock = (block, index) => (
  <CanvasBlock name={block} Icon={icons[index]} key={block} />
);

export default () => (
  <div className={S.container}>{names.map(renderBlock)}</div>
);
