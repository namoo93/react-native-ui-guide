import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainNavigationProp } from '../navigations/MainNavigator';
import { H1 } from './typography/Headline';
import { useContext, useMemo } from 'react';
import { ColorContext } from '../store/context';
import { dark, light } from '../theme';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'button',
    link: '/components/button',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    title: 'avatar',
    link: '/components/avatar',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
    title: 'header',
    link: '/components/header',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'layouts',
    link: '/components/layouts',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'typography',
    link: '/components/typography',
  },
];

export default function HomeView() {
  const {
    state: { theme },
    actions,
  } = useContext(ColorContext);

  const color = useMemo(() => {
    return theme === 'dark' ? `${dark.colors.text}` : `${light.colors.text}`;
  }, [theme]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme === 'dark'
              ? `${dark.colors.background}`
              : `${light.colors.background}`,
        },
      ]}
    >
      <H1 theme={theme} p={'20px'}>
        Anychat UI guide
      </H1>

      <View style={[styles.buttonContainer]}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderColor: color,
            },
          ]}
          onPress={() =>
            theme === 'light'
              ? actions.setThemeToDark()
              : actions.setThemeToLight()
          }
        >
          <Text
            style={[
              {
                color: color,
              },
            ]}
          >
            {theme}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} link={item.link} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

type ItemProps = {
  title: string;
  link: string | any;
};

const Item = ({ title, link }: ItemProps) => {
  const navigation = useNavigation<MainNavigationProp>();
  const {
    state: { theme },
  } = useContext(ColorContext);
  const color = useMemo(() => {
    return theme === 'dark' ? `${dark.colors.text}` : `${light.colors.text}`;
  }, [theme]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(link, {})}
      style={[
        styles.item,
        {
          backgroundColor:
            theme === 'dark'
              ? `${dark.colors.background}`
              : `${light.colors.background}`,
          borderColor: color,
        },
      ]}
    >
      <Text style={[{ color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
