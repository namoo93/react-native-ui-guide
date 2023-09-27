module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off', // after React17, no need to import React
  },
};
