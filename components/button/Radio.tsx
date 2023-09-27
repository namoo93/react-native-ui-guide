import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import RadioOn from '../../assets/images/icon/radio-on.svg';
import RadioOff from '../../assets/images/icon/radio-off.svg';

type ComponentProps = {
  style?: StyleProp<ViewStyle>;
  checked: boolean;
  handleChecked: (checked: boolean) => void;
};

const RadioContainer = styled.TouchableOpacity``;

export const Radio = ({ style, checked, handleChecked }: ComponentProps) => {
  return (
    <RadioContainer style={style} onPress={() => handleChecked(!checked)}>
      {checked ? <RadioOn /> : <RadioOff />}
    </RadioContainer>
  );
};
