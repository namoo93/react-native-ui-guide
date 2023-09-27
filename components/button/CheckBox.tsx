import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
//svg
import CheckOn from '../../assets/images/icon/check-on.svg';
import CheckOff from '../../assets/images/icon/check-off.svg';
import CheckRoundOn from '../../assets/images/icon/check-round-on.svg';
import CheckRoundOff from '../../assets/images/icon/check-round-off.svg';
import CheckDisabled from '../../assets/images/icon/check-disabled.svg';
import CheckRoundDisabled from '../../assets/images/icon/check-round-disabled.svg';

type ComponentProps = {
  style?: StyleProp<ViewStyle>;
  checked: boolean;
  handleChecked: (checked: boolean) => void;
  round?: boolean;
  disabled?: boolean;
};

const CheckBoxContainer = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
`;

export const Checkbox = ({
  style,
  checked,
  handleChecked,
  round,
  disabled,
}: ComponentProps) => {
  return (
    <CheckBoxContainer
      style={style}
      disabled={disabled}
      onPress={() => handleChecked(!checked)}
    >
      {!disabled && (
        <>
          {round ? (
            <>{checked ? <CheckOn /> : <CheckOff />}</>
          ) : (
            <>{checked ? <CheckRoundOn /> : <CheckRoundOff />}</>
          )}
        </>
      )}
      {disabled && <>{round ? <CheckDisabled /> : <CheckRoundDisabled />}</>}
    </CheckBoxContainer>
  );
};
