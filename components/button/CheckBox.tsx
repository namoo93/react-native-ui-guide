import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

type ComponentProps = {
  style?: StyleProp<ViewStyle>;
  checked: boolean;
  handleChecked: (checked: boolean) => void;
  round?: boolean;
  disabled?: boolean;
};

type CheckBoxImageProps = {
  round?: boolean;
};

const CheckBoxContainer = styled.TouchableOpacity`
  position: relative;
  width: 22px;
  height: 22px;
`;

const CheckBoxImage = styled.Image<CheckBoxImageProps>`
  ${({ round }) => (!round ? 'display: flex;' : 'display: none;')}
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CheckBoxRoundImage = styled.Image<CheckBoxImageProps>`
  ${({ round }) => (round ? 'display: flex;' : 'display: none;')}
  position: absolute;
  width: 100%;
  height: 100%;
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
          <CheckBoxImage
            round={round}
            source={
              checked
                ? require('/assets/images/icon/check-on.svg')
                : require('/assets/images/icon/check-off.svg')
            }
          />
          <CheckBoxRoundImage
            round={round}
            source={
              checked
                ? require('/assets/images/icon/check-round-on.svg')
                : require('/assets/images/icon/check-round-off.svg')
            }
          />
        </>
      )}
      {disabled && (
        <>
          <CheckBoxImage
            round={round}
            source={require('/assets/images/icon/check-disabled.svg')}
          />
          <CheckBoxRoundImage
            round={round}
            source={require('/assets/images/icon/check-round-disabled.svg')}
          />
        </>
      )}
    </CheckBoxContainer>
  );
};
