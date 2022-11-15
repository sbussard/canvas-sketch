import CanvasBlock from 'src/component/CanvasBlock';

import Clipboard from 'src/component/svg/Clipboard';
import Computer from 'src/component/svg/Computer';
import Favorite from 'src/component/svg/Favorite';
import Link from 'src/component/svg/Link';
import Megaphone from 'src/component/svg/Megaphone';
import Notification from 'src/component/svg/Notification';
import ShoppingCartAdd from 'src/component/svg/ShoppingCartAdd';
import Tag from 'src/component/svg/Tag';
import Users from 'src/component/svg/Users';
import useAppState from 'src/state';
import './styles.scss';

const icons = [
  Link,
  Clipboard,
  Computer,
  Favorite,
  Notification,
  Megaphone,
  Users,
  Tag,
  ShoppingCartAdd
];

export default function Canvas() {
  const { state } = useAppState();

  return (
    <div className="Canvas">
      {state.map(({ name }, boxIndex) => (
        <CanvasBlock boxIndex={boxIndex} Icon={icons[boxIndex]} key={name} />
      ))}
    </div>
  );
}
