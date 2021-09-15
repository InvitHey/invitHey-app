import styled from '../../../styled-components';


export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.lightGray};
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 30px; */
`;

export const UserInfo = styled.View`
    align-items: center;
    flex-direction: row;
    flex: 1;
`;

export const UserImage = styled.View`
    width: 40px;
    height: 40px;
    background-color: #999;
    border-radius: 5px;
`;

export const Names = styled.View`
    margin-left: 14px;
`;

export const NickName = styled.Text`
    font-size: ${({theme}) => theme.typography.smallFont};
    font-family: ${({theme}) => theme.typography.bold};
    color: ${({theme}) => theme.colors.darkGray};
`;

export const UserName = styled.Text`
    font-size: ${({theme}) => theme.typography.smallestFont};
    font-family: ${({theme}) => theme.typography.regular};
    color: ${({theme}) => theme.colors.textGray};
`;




