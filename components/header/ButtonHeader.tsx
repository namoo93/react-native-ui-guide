/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';

interface ButtonHeaderProps {
  onClick?: () => void;
  title?: string;
  button?: Array<React.ReactElement>;
  isBack?: boolean;
}

export default function ButtonHeader({
  onClick,
  title,
  button,
  isBack = true,
}: ButtonHeaderProps) {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isBack ? (
          <BackHeaderButton
            onPress={() => {
              if (onClick) {
                onClick();
              } else {
                navigation.goBack();
              }
            }}
          >
            <IconImage
              theme={theme}
              source={require('/assets/images/icon/icon-left.svg')}
            />
          </BackHeaderButton>
        ) : (
          <></>
        )}

        <Title>{title}</Title>
        <ButtonContainer>{button}</ButtonContainer>
      </View>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  min-height: 40px;
  padding: 0 15px;
`;
const BackHeaderButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: -5px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const Title = styled.Text``;
const IconImage = styled.Image<{ theme: boolean }>`
  width: 30px;
  height: 30px;
`;
/* tint-color: ${({ theme }) => theme.color}; */
const ButtonContainer = styled.View`
  position: absolute;
  right: 0;
  flex-direction: row;
`;
