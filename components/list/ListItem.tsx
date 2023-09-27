import { useNavigation } from '@react-navigation/native';
import { MainNavigationProp } from '../../navigations/MainNavigator';
import { ColorContext } from '../../store/context';
import { useContext, useMemo } from 'react';
import { dark, light } from '../../theme';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ItemProps = {
  title: string;
  link: string | any;
};

export default function ListItem({ title, link }: ItemProps) {
  const navigation = useNavigation<MainNavigationProp>();
  const {
    state: { theme },
  } = useContext(ColorContext);
  const color = useMemo(() => {
    return theme === 'dark' ? `${dark.colors.text}` : `${light.colors.text}`;
  }, [theme]);
  const background = useMemo(() => {
    return theme === 'dark'
      ? `${dark.colors.background}`
      : `${light.colors.background}`;
  }, [theme]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(link, {})}
      style={[
        styles.item,
        {
          backgroundColor: background,
          borderColor: color,
        },
      ]}
    >
      <Text style={[{ color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
