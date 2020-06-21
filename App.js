import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import themes from './src/themes';

import Home from './src/pages/Home';

const App = () => {
  // useColorScheme is a function that returns dark, light null
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home deviceTheme={deviceTheme} />
    </ThemeProvider>
  );
};

export default App;
