import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
 

export const Container = styled.View`
    background-color: #FCFCFC;
    height: 56px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
`;

export const ArrowIcon = styled(Feather)`
    font-size: ${({theme}) => theme.typography.smallFont};
    color: ${({theme}) => theme.colors.primary}; 
    margin-right: 28px;
`;

export const Back = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})``;


export const Page = styled.View`
    font-family: ${({theme}) => theme.typography.medium};
    font-size: ${({theme}) => theme.typography.largeFont};
    color: ${({theme}) => theme.colors.darkGray};
`;
