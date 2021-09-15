import styled from '../../../styled-components';

export const Btn = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})`
    padding: 6px 12px;
    background-color: #F9F9F9;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

export const TextBtn = styled.Text`
    font-size: ${({theme}) => theme.typography.smallestFont};
    font-family: ${({theme}) => theme.typography.medium};
`;