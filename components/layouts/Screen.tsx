import React, { useContext, useMemo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { ColorContext } from '../../store/context';
import { dark, light } from '../../theme';
import styled from 'styled-components/native';
import { HEIGHT } from '../../constants/HEIGHT';
import { WIDTH } from '../../constants/WIDTH';
import ButtonHeader from '../header/ButtonHeader';

export interface ChildComponentProps {
  children?: React.ReactNode | React.ReactNode[];
  bottomItem?: React.ReactNode | React.ReactNode[];
  topItem?: React.ReactNode | React.ReactNode[];
}

export default function ScreenButtonBottom({
  children,
  bottomItem,
  topItem,
}: ChildComponentProps) {
  const {
    state: { theme },
  } = useContext(ColorContext);
  const background = useMemo(() => {
    return theme === 'dark'
      ? `${dark.colors.background}`
      : `${light.colors.background}`;
  }, [theme]);

  return (
    <SafeAreaView>
      <View style={{ height: HEIGHT, overflow: 'hidden' }}>
        {topItem && topItem}

        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          bounces={false}
          overScrollMode="never"
          style={{
            backgroundColor: background,
            flex: 1,
            minHeight: HEIGHT,
            paddingTop: 5,
          }}
        >
          {children}
        </ScrollView>
        {bottomItem && (
          <ButtonWrap style={{ width: WIDTH, bottom: 0 }}>
            {bottomItem}
          </ButtonWrap>
        )}
      </View>
    </SafeAreaView>
  );
}
const ButtonWrap = styled.View`
  flex: 1;
  position: absolute;
`;
