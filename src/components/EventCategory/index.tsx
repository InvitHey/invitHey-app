import React from 'react';

import {
    Container,
    CategoryType,
    Icon
} from './styles';

type Props = {
    title: string;
    onPress: () => void;
}

export function EventCategory(  { title, ...rest }: Props  ) {
    return(
        <Container onPress={() => {}} >
            <CategoryType>{title}</CategoryType>
            <Icon name='keyboard-arrow-down' />
        </Container>
    );
}