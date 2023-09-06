import { COLOR } from '../../constants/COLOR';
import React, { useContext } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from 'styled-components/native';

type ComponentProps = {
  isEnabled: boolean;
  setIsEnabled: () => void;
};

export const SwitchButton = ({ isEnabled, setIsEnabled }: ComponentProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{
        false: theme ? '#282828' : `${COLOR.BRIGHT_GRAY}`,
        true: COLOR.SECONDARY,
      }}
      thumbColor={isEnabled ? '#fff' : '#fff'}
      ios_backgroundColor={theme ? '#282828' : `${COLOR.BRIGHT_GRAY}`}
      onValueChange={() => setIsEnabled()}
      value={isEnabled}
      style={
        Platform.OS === 'ios' && {
          transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        }
      }
    />
  );
};
