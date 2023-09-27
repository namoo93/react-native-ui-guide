import { useState } from 'react';
import ButtonHeader from '../header/ButtonHeader';
import Screen from '../layouts/Screen';
import { Button } from './Button';
import { Checkbox } from './CheckBox';
import MarginBox from '../layouts/MarginBox';
import { Radio } from './Radio';
import { SwitchButton } from './Toggle';
import PaddingBox from '../layouts/PaddingBox';
import Headline from '../typography/Headline';

export default function ButtonView() {
  const [isOn, setIsOn] = useState(false);
  return (
    <Screen topItem={<ButtonHeader />}>
      <Headline name={'H2'} m={'10px 15px'} text={'Button'} />
      <Button label={'full widht button'} fontWeight={500} marginBottom={15} />
      <Button
        label={'inactive button'}
        fontWeight={500}
        marginBottom={15}
        inactive
      />
      <Button
        label={'active button'}
        fontWeight={500}
        marginBottom={15}
        active
      />
      <Button
        height={54}
        borderRadiusRound
        label={'round button'}
        fontWeight={300}
        marginLeft={10}
        marginRight={10}
        marginBottom={15}
      />
      <Button
        width={'fit-content'}
        height={54}
        borderRadiusRound
        label={'fit content button'}
        fontWeight={300}
        marginLeft={10}
        marginRight={10}
        padding={15}
        marginBottom={15}
      />
      <Button
        width={230}
        height={54}
        borderRadiusRound
        label={'fix width button'}
        fontWeight={300}
        marginLeft={10}
        marginRight={10}
        padding={15}
        marginBottom={15}
      />
      <Button
        width={120}
        height={30} //최소 높이
        borderRadiusRound
        label={'custom button'}
        fontWeight={300}
        marginLeft={10}
        marginRight={10}
        padding={5}
        fontSize={13}
        marginBottom={15}
      />
      <Headline name={'H4'} m={'10px 15px'} text={'Checkbox'} />

      <MarginBox margin={'0 15px'}>
        <Checkbox checked={isOn} handleChecked={() => setIsOn(!isOn)} />
        <MarginBox margin={'5px 0'} />
        <Checkbox round checked={isOn} handleChecked={() => setIsOn(!isOn)} />
        <MarginBox margin={'5px 0'} />
        <Checkbox
          checked={isOn}
          handleChecked={() => setIsOn(!isOn)}
          disabled
        />
        <MarginBox margin={'5px 0'} />
        <Checkbox
          round
          checked={isOn}
          handleChecked={() => setIsOn(!isOn)}
          disabled
        />
      </MarginBox>

      <Headline name={'H4'} m={'10px 15px'} text={'Radio'} />

      <MarginBox margin={'0 15px'}>
        <Radio checked={isOn} handleChecked={() => setIsOn(!isOn)} />
      </MarginBox>
      <Headline name={'H4'} m={'10px 15px'} text={'SwitchButton'} />
      <MarginBox margin={'0 15px'}>
        <SwitchButton isEnabled={isOn} setIsEnabled={() => setIsOn(!isOn)} />
        <PaddingBox padding={'20px'} />
      </MarginBox>
    </Screen>
  );
}
