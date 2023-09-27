import { useNavigation } from '@react-navigation/native';
import React, { ReactNode, useContext, useMemo } from 'react';
// import { SvgProps } from 'react-native-svg/lib/typescript/ReactNativeSVG';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { ColorContext } from '../../store/context';
import { dark, light } from '../../theme';
//svg
import LeftArrowWhite from '../../assets/images/icon/icon-left_white.svg';
import LeftArrow from '../../assets/images/icon/icon-left.svg';

interface ButtonHeaderProps {
  onPressIconButton?: () => void;
  title?: string;
  button?: Array<React.ReactElement>;
  textButton?: string;
  textButtonColor?: string;
  leftIcon?: ReactNode;
}

export default function ButtonHeader({
  onPressIconButton,
  title,
  button,
  textButton,
  textButtonColor,
  leftIcon,
}: ButtonHeaderProps) {
  const navigation = useNavigation();
  const {
    state: { theme },
  } = useContext(ColorContext);
  const color = useMemo(() => {
    if (theme === 'dark') {
      return `${dark.colors.text}`;
    }
    if (theme === 'light') {
      return `${light.colors.text}`;
    }
    // if (theme === 'user-setting') {
    //   return `${userSetting.colors.text}`;
    // }
  }, [theme]);
  const background = useMemo(() => {
    return theme === 'dark'
      ? `${dark.colors.background}`
      : `${light.colors.background}`;
  }, [theme]);

  return (
    <HeaderContainer
      style={{
        backgroundColor: background,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: background,
        }}
      >
        {!leftIcon ? (
          <BackHeaderButton
            onPress={() => {
              if (onPressIconButton) {
                onPressIconButton;
              } else {
                navigation.goBack();
              }
            }}
          >
            {theme === 'dark' ? <LeftArrowWhite /> : <LeftArrow />}
          </BackHeaderButton>
        ) : (
          <BackHeaderButton onPress={() => onPressIconButton}>
            {leftIcon}
          </BackHeaderButton>
        )}

        <Title style={{ color: color }}>{title}</Title>

        <ButtonContainer>
          {textButton ? (
            <TextButton>
              <Text
                style={{
                  color: textButtonColor ? textButtonColor : color,
                  fontSize: 18,
                  fontWeight: '500',
                }}
              >
                {textButton}
              </Text>
            </TextButton>
          ) : (
            <ButtonWrap>{button}</ButtonWrap>
          )}
        </ButtonContainer>
      </View>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  height: 60px;
  padding: 15px;
`;
const BackHeaderButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: -5px;
  width: 30px;
`;
const TextButton = styled.TouchableOpacity``;
const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  padding-top: 5px;
  padding-left: 32px;
  width: 100%;
  padding-right: 50px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  right: 0;
  flex-direction: row;
`;

const ButtonWrap = styled.View``;
