import styled from '../../../styled-components';
import { MaterialIcons } from '@expo/vector-icons';


export const Container = styled.View`
    background-color: #F9F9F9;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
`;

export const Head = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const Heart = styled(MaterialIcons)`
    font-size: ${({theme}) => theme.typography.mediumFont};
    color: ${({theme}) => theme.colors.darkGray};
`;

export const Header = styled.View`
    flex-direction: row;
`;

export const EventImage = styled.View`
    width: 56px;
    height: 56px;
    border-radius: 5px;
    background-color: #CCC;
`;

export const Data = styled.View`
    justify-content: space-between;
    margin-left: 14px;
    flex: 1;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.typography.mediumFont};
    color: ${({theme}) => theme.colors.darkGray};
`;

export const EventInfo = styled.View`
    flex-direction: row;
`;

export const Footer = styled.View`
    margin-top: 16px;
`;

export const EventDescription = styled.Text`
    color: ${({theme}) => theme.colors.textGray};
    font-size: ${({theme}) => theme.typography.tinyFont};;
    font-family: ${({theme}) => theme.typography.regular};
`;

export const Date = styled.View`
    margin-right: 14px;
    flex-direction: row;
    align-items: center;
`;

export const Hour = styled.View`
    margin-right: 14px;
    align-items: center;
    flex-direction: row;
`;

export const Payment = styled.View`
    margin-right: 14px;
    align-items: center;
    flex-direction: row;
`;

export const DateIcon = styled(MaterialIcons)`
    margin-right: 8px;
    color: ${({theme}) => theme.colors.textGray};
`;

export const HourIcon = styled(MaterialIcons)`
    margin-right: 8px;
    color: ${({theme}) => theme.colors.textGray};
`;

export const PaymentIcon = styled(MaterialIcons)`
    margin-right: 8px;
    color: ${({theme}) => theme.colors.textGray};
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.darkGray};
    font-size: ${({theme}) => theme.typography.tinyFont};
`;




