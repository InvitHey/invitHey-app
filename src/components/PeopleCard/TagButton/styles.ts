import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'; 

export const Container = styled(RectButton).attrs({
    activeOpacity: .8
})`
    background-color: ${({theme}) => theme.colors.lightGray};
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 7px 10px;
`;

export const ButtonFor = styled.Text`
    color: ${({theme}) => theme.colors.darkGray};
    text-align: center;
`;