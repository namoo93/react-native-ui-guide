import ButtonHeader from '../header/ButtonHeader';
import Screen from '../layouts/Screen';
import { H2 } from '../typography/Headline';
import { Avatar } from './Avatar';
// import Profile from '../../assets/images/icon/check-on.svg';

export default function AvatarView() {
  return (
    <Screen>
      <ButtonHeader />
      <H2 m={'10px 15px'}>Avatar</H2>
      <Avatar />
      {/* <Profile  /> */}
      {/* <Image source={require('../../assets/images/icon/check-on.svg')} /> */}
    </Screen>
  );
}
