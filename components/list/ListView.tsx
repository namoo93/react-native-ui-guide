import Screen from '../layouts/Screen';
import ButtonHeader from '../header/ButtonHeader';
import Headline from '../typography/Headline';

export default function ListView() {
  return (
    <Screen topItem={<ButtonHeader />}>
      <Headline name={'H2'} m={'10px 15px'} text={'List'} />
    </Screen>
  );
}
