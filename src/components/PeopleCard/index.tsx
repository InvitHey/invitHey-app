import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { TagButton } from './TagButton';

import {
    Container,
    UserImage,
    UserInfo,
    UserName,
    NickName,
    Names
} from './styles';

interface Props extends TouchableOpacityProps{
    nickName: string;
    user: string;
    text: string;
}

export function PeopleCard( { user, nickName }: Props ) {
    return(
        <Container>
            <UserInfo>
                <UserImage />
                <Names>
                    <NickName>{nickName}</NickName>
                    <UserName>{user}</UserName>
                </Names>
            </UserInfo>
            <TagButton onPress={() => {}}
                text='Ola'
            />
        </Container>
    );
}



