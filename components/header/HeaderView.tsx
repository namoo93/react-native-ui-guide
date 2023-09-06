import Screen from '../layouts/Screen';
import { H2 } from '../typography/Headline';
import ButtonHeader from './ButtonHeader';

export default function HeaderView() {
  return (
    <Screen>
      <ButtonHeader />
      <H2 m={'10px 15px'}>Header(Title)</H2>
    </Screen>
  );
}
