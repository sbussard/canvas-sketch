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

import AlliesAndGifts from '~/assets/icons/AlliesAndGifts.png';
import BetterWorld from '~/assets/icons/BetterWorld.png';
import CallToAdventure from '~/assets/icons/CallToAdventure.png';
import CrossingTheThreshold from '~/assets/icons/CrossingTheThreshold.png';
import EverydayHero from '~/assets/icons/EverydayHero.png';
import Mentor from '~/assets/icons/Mentor.png';
import OrdinaryWorld from '~/assets/icons/OrdinaryWorld.png';
import ThreeChallenges from '~/assets/icons/ThreeChallenges.png';
import Villain from '~/assets/icons/Villain.png';

import S from './styles.scss';

let names = [
  'Everyday Hero',
  'Ordinary World',
  'Call to Adventure',
  'Better World',
  'Crossing the Threshold',
  'Allies and Gifts',
  'Mentor and Gifts',
  'Compelling Villain',
  'Three Challenges'
];

let icons = [
  EverydayHero,
  OrdinaryWorld,
  CallToAdventure,
  BetterWorld,
  CrossingTheThreshold,
  AlliesAndGifts,
  Mentor,
  Villain,
  ThreeChallenges
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
