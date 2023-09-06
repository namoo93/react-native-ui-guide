import React, { useContext } from 'react';
import { SafeAreaView, View } from 'react-native';
import SingleChildComponentProps from '../../types/SingleChildComponentProps';
import { ColorContext } from '../../store/context';
import { dark, light } from '../../theme';
import { HEIGHT } from '../../constants/HEIGHT';

function Screen({ children }: SingleChildComponentProps) {
  const { theme } = useContext(ColorContext);
  // console.log(theme);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor:
            theme === 'dark'
              ? `${dark.colors.background}`
              : `${light.colors.background}`,
          flex: 1,
          minHeight: HEIGHT,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

export default Screen;
