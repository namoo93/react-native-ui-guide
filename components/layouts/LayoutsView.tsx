import { Button } from '../button/Button';
import ButtonHeader from '../header/ButtonHeader';
import Headline from '../typography/Headline';
import Screen from './Screen';

export default function LayoutsView() {
  return (
    <Screen
      topItem={<ButtonHeader />}
      bottomItem={
        <Button
          label={'full widht button position bottom'}
          fontWeight={500}
          marginBottom={0}
        />
      }
    >
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
      <Headline name={'H2'} m={'10px 15px'} text={'Layouts'} />
    </Screen>
  );
}
