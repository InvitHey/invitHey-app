import styled from '../../../../styled-components';

import { PeopleCardListProps } from '.';


import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const User = styled.View`
    flex-direction: row;
`;

export const Menu = styled(MaterialIcons)`
    font-size: 24px;
    color: ${props => props.theme.colors.darkGray};
`;

export const PeopleCardList = styled(FlatList as new () => FlatList<PeopleCardListProps>).attrs({
    showsVerticalScrollIndicator: false
})``;