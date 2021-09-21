import styled from '../../../styled-components';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: #666;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const BackgroundImage = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 100%;
    height: 208px;   
`;

export const ConfirmArea = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 8px 16px;
    border-radius: 20px;
    background-color: #FCFCFC;
`;

export const ConfirmText = styled.Text`
    font-size: ${props => props.theme.typography.smallestFont};
    font-family: ${props => props.theme.typography.medium}; 
    margin-right: 5px;
`;

export const Done = styled(MaterialIcons)`
    font-size: ${props => props.theme.typography.mediumFont};
    color: #4CB4FF; 
`;

export const Favorite = styled(MaterialIcons)`
    font-size: 24px;
    margin-left: 18px;
    color: #FF5454;
    background-color: #FFFFFF;
    border-radius: 50px;
    padding: 10px;    
`; 

export const Separator = styled.View`
    position: absolute;
    align-items: center; 
    flex-direction: row;
    padding: 0 20px 20px 0;
`;

export const Main = styled.View`
    margin-top: -7px;
    padding: 16px 24px;
    border-radius: 10px;
    height: 100%;
    background-color: #FCFCFC;
`;

export const Header = styled.View` 
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    /* background-color: #CCC; */
`;

export const Menu = styled(MaterialIcons)`
    font-size: 22px;
    color: ${(props) => props.theme.colors.darkGray};
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.colors.darkGray};
    font-family: ${(props) => props.theme.typography.medium};
    font-size: ${(props) => props.theme.typography.largeFont};
`;

export const Createby = styled.Text`
    color: ${(props) => props.theme.colors.textGray};
    font-family: ${(props) => props.theme.typography.regular};
    font-size: ${(props) => props.theme.typography.smallestFont};
`;

export const Info = styled.View`
    width: 100%;
    margin-top: 16px;
`;


export const Data = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 24px;
`;

export const Icon = styled(MaterialIcons)`
    margin-right: 8px;
    color: ${props => props.theme.colors.textGray};
    font-size: ${props => props.theme.typography.smallFont};
`;

export const DataInfo = styled.Text`
    font-size: ${props => props.theme.typography.smallestFont};
    font-family: ${props => props.theme.typography.medium};
    color: ${props => props.theme.colors.darkGray};
`; 

export const Local = styled.View`
    margin-top: 17px;
    align-items: center;
    flex-direction: row;
`;

export const LocalDescription = styled.Text`
    color: ${(props) => props.theme.colors.darkGray};
    font-family: ${(props) => props.theme.typography.regular}; 
    font-size: ${(props) => props.theme.typography.smallestFont};
`;

export const Buttons = styled.View`
    margin-top: 32px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Description = styled.View`
    margin-top: 30px;
    padding: 0 10px;
`;

export const EventDescription = styled.Text`
    color: ${(props) => props.theme.colors.darkGray};
    font-family: ${(props) => props.theme.typography.regular}; 
    font-size: ${(props) => props.theme.typography.smallestFont};
`;