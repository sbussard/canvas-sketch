import React from 'react';
import classnames from 'classnames';
import { UseCanvas } from '~/context/canvas';
import CanvasBlock from '~/component/CanvasBlock';
import ClipboardIcon from '~/component/icon/Clipboard';
import FeedIcon from '~/component/icon/Feed';
import GiftIcon from '~/component/icon/Gift';
import HeartIcon from '~/component/icon/Heart';
import LinkIcon from '~/component/icon/Link';
import MoneyIcon from '~/component/icon/Money';
import PaintRollerIcon from '~/component/icon/PaintRoller';
import PeopleIcon from '~/component/icon/People';
import PriceTagIcon from '~/component/icon/PriceTag';
import SmileyFaceIcon from '~/component/icon/SmileyFace';
import S from './styles.scss';

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

let makeProps = (block, index) => ({
  name: block,
  Icon: icons[index]
});

export default () => (
  <UseCanvas>
    <div className={S.container}>{names.map(makeProps).map(CanvasBlock)}</div>
  </UseCanvas>
);
