import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    ButtonFor
} from './styles';

interface Props extends TouchableOpacityProps {
    text: string;
}

export function TagButton( { text }: Props ){
    return (
        <Container>
            <ButtonFor>{text}</ButtonFor>
        </Container>
    );
}