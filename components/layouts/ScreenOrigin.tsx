import React, { useContext, useMemo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import SingleChildComponentProps from '../../types/SingleChildComponentProps';
import { ColorContext } from '../../store/context';
import { dark, light } from '../../theme';
import { HEIGHT } from '../../constants/HEIGHT';

export default function Screen({ children }: SingleChildComponentProps) {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        overScrollMode="never"
      >
        <View
          style={{
            backgroundColor: background,
            flex: 1,
            minHeight: HEIGHT,
            paddingTop: 5,
          }}
        >
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
