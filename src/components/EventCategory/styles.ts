import styled from '../../../styled-components';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})`
    background-color: #FCFCFC;
    border-radius: 4px;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
    margin-bottom: 20px;
`;

export const CategoryType = styled.Text`
    ${(props) => {
        return `
        color: ${ props.theme.colors.darkGray};
        font-size: ${props.theme.typography.smallFont};
        font-family: ${props.theme.typography.regular};
        `
    }}
`;

export const Icon = styled(MaterialIcons)`
    font-size: 12px;
    color: ${({theme}) => theme.colors.darkGray};
`;