import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import ButtonView from '../components/button/ButtonView';
import HomeView from '../components/HomeView';
import LayoutsView from '../components/layouts/LayoutsView';
import TypographyView from '../components/typography/TypographyView';
import HeaderView from '../components/header/HeaderView';
import AvatarView from '../components/avatar/AvatarView';
import FormView from '../components/form/FormView';

export type MainNavigatorRouteParams = {
  '/Home': undefined;
  '/components/button': undefined;
  '/components/layouts': undefined;
  '/components/typography': undefined;
  '/components/avatar': undefined;
  '/components/header': undefined;
  '/components/form': undefined;
};

export type MainNavigationProp = NativeStackNavigationProp<
  MainNavigatorRouteParams,
  '/Home'
>;

const Stack = createNativeStackNavigator<MainNavigatorRouteParams>();
function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="/Home" component={HomeView} />
      <Stack.Screen name="/components/button" component={ButtonView} />
      <Stack.Screen name="/components/layouts" component={LayoutsView} />
      <Stack.Screen name="/components/typography" component={TypographyView} />
      <Stack.Screen name="/components/avatar" component={AvatarView} />
      <Stack.Screen name="/components/header" component={HeaderView} />
      <Stack.Screen name="/components/form" component={FormView} />
    </Stack.Navigator>
  );
}
export default MainNavigator;
