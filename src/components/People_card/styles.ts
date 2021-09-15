import styled from '../../../styled-components';

export const Card = styled.View`
    background-color: #F9F9F9;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const PeopleImage = styled.View`
    border-radius: 5px;
    width: 44px;
    height: 44px;
    background-color: #ccc;
`;

export const PeopleInfo = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const NickName = styled.Text`
    font-family: ${({theme}) => theme.typography.bold};
    font-size: ${({theme}) => theme.typography.smallFont};
    color: ${({theme}) => theme.colors.darkGray};
`;

export const View = styled.View`
    margin-left: 14px;
`;

export const NormalName = styled.Text`
    font-family: ${({theme}) => theme.typography.regular};
    font-size: ${({theme}) => theme.typography.smallestFont};
    color: ${({theme}) => theme.colors.darkGray};
`;

export const BtnText = styled.Text`
    font-family: ${({theme}) => theme.typography.medium};
    font-size: ${({theme}) => theme.typography.smallestFont};
    color: ${({theme}) => theme.colors.darkGray}; 
`;

export const Btn = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})`
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.lightGray};
`;