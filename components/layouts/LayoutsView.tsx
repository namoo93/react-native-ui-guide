import Screen from './Screen';
import { H2 } from '../typography/Headline';
import ButtonHeader from '../header/ButtonHeader';

export default function LayoutsView() {
  return (
    <Screen>
      <ButtonHeader />
      <H2 m={'10px 15px'}>Layouts</H2>
    </Screen>
  );
}
