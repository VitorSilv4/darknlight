import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

import {Container, Title} from './styles';

const Home = ({deviceTheme}) => {
  console.log(deviceTheme);

  return (
    <Container>
      <Icon
        name={deviceTheme === 'dark' ? 'moon' : 'sun'}
        size={40}
        color={deviceTheme === 'dark' ? '#7159c1' : '#ff9000'}
      />
      <Title>{deviceTheme === 'dark' ? 'Dark' : 'Light'} Mode</Title>
    </Container>
  );
};

export default Home;
