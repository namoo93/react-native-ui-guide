import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

type ComponentProps = {
  style?: StyleProp<ViewStyle>;
  checked: boolean;
  handleChecked: (checked: boolean) => void;
};

const RadioContainer = styled.TouchableOpacity`
  position: relative;
  width: 22px;
  height: 22px;
`;

const RadioImage = styled.Image`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Radio = ({ style, checked, handleChecked }: ComponentProps) => {
  return (
    <RadioContainer style={style} onPress={() => handleChecked(!checked)}>
      <RadioImage
        source={
          checked
            ? require('/assets/images/icon/radio-on.svg')
            : require('/assets/images/icon/radio-off.svg')
        }
      />
    </RadioContainer>
  );
};
