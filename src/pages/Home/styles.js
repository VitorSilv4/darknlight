import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.color};
  font-size: 36px;
`;
