import { createContext, useCallback, useReducer } from 'react';
import { light } from '../theme';
import SingleChildComponentProps from '../types/SingleChildComponentProps';

type ThemeAndColor = {
  theme: 'light' | 'dark' | 'user-setting';
  colors: Record<string, string>;
};

const initialThemeAndColor: ThemeAndColor = {
  ...light,
};

type Action =
  | {
      type: 'SET_THEME';
      payload: ThemeAndColor['theme'];
    }
  | {
      type: 'SET_THEME_TO_LIGHT';
    }
  | {
      type: 'SET_THEME_TO_DARK';
    }
  | {
      type: 'SET_COLOR';
      payload: {
        key: string;
        value: string;
      };
    };

const reducers = (state: ThemeAndColor, action: Action): ThemeAndColor => {
  if (action.type === 'SET_COLOR') {
    return {
      ...state,
      colors: {
        [action.payload.key]: action.payload.value,
      },
    };
  }
  if (action.type === 'SET_THEME') {
    return {
      ...state,
      theme: action.payload,
    };
  }
  if (action.type === 'SET_THEME_TO_DARK') {
    return {
      ...state,
      theme: 'dark',
    };
  }
  if (action.type === 'SET_THEME_TO_LIGHT') {
    return {
      ...state,
      theme: 'light',
    };
  }

  return state;
};

export interface ColorContextType {
  state: ThemeAndColor;
  actions: {
    setTheme: (payload: ThemeAndColor['theme']) => void;
    setThemeToDark: () => void;
    setThemeToLight: () => void;
    setColor: (payload: { key: string; value: string }) => void;
  };
}
export const ColorContext = createContext<ColorContextType>({
  state: initialThemeAndColor,
  actions: {
    setTheme: () => {},
    setColor: () => {},
    setThemeToDark: () => {},
    setThemeToLight: () => {},
  },
});

function ColorProvider({ children }: SingleChildComponentProps) {
  // const [theme, setTheme] = useState<string>('light');
  const [themeAndColor, dispatch] = useReducer(reducers, initialThemeAndColor);

  const handleSetTheme = useCallback((payload: ThemeAndColor['theme']) => {
    dispatch({ type: 'SET_THEME', payload: payload });
  }, []);

  const handleSetThemeToDark = useCallback(() => {
    dispatch({ type: 'SET_THEME_TO_DARK' });
  }, []);

  const handleSetThemeToLight = useCallback(() => {
    dispatch({ type: 'SET_THEME_TO_LIGHT' });
  }, []);

  const handleSetColor = useCallback(
    (payload: { key: string; value: string }) => {
      dispatch({ type: 'SET_COLOR', payload });
    },
    [],
  );

  return (
    <ColorContext.Provider
      value={{
        state: themeAndColor,
        actions: {
          setColor: handleSetColor,
          setTheme: handleSetTheme,
          setThemeToDark: handleSetThemeToDark,
          setThemeToLight: handleSetThemeToLight,
        },
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };
