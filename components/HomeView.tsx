import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { useContext, useMemo } from 'react';
import { ColorContext } from '../store/context';
import { dark, light } from '../theme';
import ListItem from './list/ListItem';
import Headline from './typography/Headline';

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
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'form',
    link: '/components/form',
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
  const background = useMemo(() => {
    return theme === 'dark'
      ? `${dark.colors.background}`
      : `${light.colors.background}`;
  }, [theme]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: background,
        },
      ]}
    >
      <Headline name={'H2'} p={'20px'} text={'Anychat UI guide'} />

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
        renderItem={({ item }) => (
          <ListItem title={item.title} link={item.link} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
});
