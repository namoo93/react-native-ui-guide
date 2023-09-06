import { useState } from 'react';
import ButtonHeader from '../header/ButtonHeader';
import Screen from '../layouts/Screen';
import { H2, H4 } from '../typography/Headline';
import { Button } from './Button';
import { Checkbox } from './CheckBox';
import MarginBox from '../layouts/MarginBox';
import { Radio } from './Radio';
import { SwitchButton } from './Toggle';
import PaddingBox from '../layouts/PaddingBox';

export default function ButtonView() {
  const [isOn, setIsOn] = useState(false);
  return (
    <Screen>
      <ButtonHeader />
      <H2 m={'10px 15px'}>Buttons</H2>
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
        height={20}
        borderRadiusRound
        label={'custom button'}
        fontWeight={300}
        marginLeft={10}
        marginRight={10}
        padding={5}
        fontSize={13}
        marginBottom={15}
      />
      <H4 p={'20px 15px 15px 15px'}>Check Box</H4>
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
      <H4 p={'20px 15px 15px 15px'}>Radio</H4>
      <MarginBox margin={'0 15px'}>
        <Radio checked={isOn} handleChecked={() => setIsOn(!isOn)} />
      </MarginBox>
      <H4 p={'20px 15px 15px 15px'}>Toggle</H4>
      <MarginBox margin={'0 15px'}>
        <SwitchButton isEnabled={isOn} setIsEnabled={() => setIsOn(!isOn)} />
        <PaddingBox padding={'20px'} />
      </MarginBox>
    </Screen>
  );
}
