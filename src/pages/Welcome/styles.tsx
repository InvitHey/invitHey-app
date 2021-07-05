import styled from '../../../styled-components';
import { Platform } from 'react-native';

type Props = {
  primaryBg: boolean,
}


export const Logo = styled.Image`

`

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

`

export const Actions = styled.View`
  width: 100%;
  align-items: center;

`

export const LinkText = styled.Text`
  margin-top: 20px;
  ${(props) => {
    return `
      color: ${props.theme.colors.secondary};
      font-size: ${props.theme.typography.smallFont};
      font-family: ${props.theme.typography.bold};
    `
  }}
  
`

export const Text = styled.Text`
  text-align: center;
  ${(props) => {
    return `
      color: ${props.theme.colors.darkGray};
      font-size: ${props.theme.typography.smallFont};
      font-family: ${props.theme.typography.light};
    `
  }}
`