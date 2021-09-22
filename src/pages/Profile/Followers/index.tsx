import React, {useState} from 'react';

import GlobalComponent from '../../../components/GlobalApp';

import avatar from '../../../assets/images/logo_baloon.jpeg';

import {
    User,
    Menu,
    Header,
    PeopleCardList
} from './styles';

export interface PeopleCardListProps extends Props{
    id: string
}

import { Avatar, FlexRow, NickName, TextName } from '../styles';
import { TouchableOpacity, View } from 'react-native';
import { TagButton } from '../../../components/TagButton';
import { PeopleCard, Props } from '../../../components/PeopleCard';

export const data: PeopleCardListProps[] = [
    {
        id: '1',
        nickName: 'eubryan',
        normalName: 'Bryan',
        buttonTitle: 'Remover'
    },
    {
        id: '2',
        nickName: 'eubryan',
        normalName: 'Bryan',
        buttonTitle: 'Remover'
    },
    {
        id: '3',
        nickName: 'eubryan',
        normalName: 'Bryan',
        buttonTitle: 'Remover'
    },    
];

export default function Followers() {

    const [btnActive, setBtnActive] = useState('');
    
    const filter = {
        all: 'all',
        created: 'created',
        participating: 'participating',
        following: 'following',
    }
    
    function handleBtnActive(type: string) {
        setBtnActive(type);
    }
    
    return(
        <GlobalComponent>
            <Header>
                <User>
                    <Avatar source={avatar} />
                    <View>
                        <TextName>Johnny Cash</TextName>
                        <NickName>johnnyejune</NickName>
                    </View>
                </User>
                <TouchableOpacity onPress={() => {}}>
                    <Menu name='menu' />
                </TouchableOpacity>
            </Header>
            <FlexRow>
                <TagButton
                    isActive={btnActive === 'followers'}
                    handleButton={() => handleBtnActive('followers')}
                    textBtn="Seguidores (530)" 
                />
                <TagButton
                    isActive={btnActive === 'following'}
                    handleButton={() => handleBtnActive('following')}
                    textBtn="Seguindo (240)" 
                />
            </FlexRow>
            <PeopleCardList 
                data={data}
                renderItem={({item}) => 
                    <PeopleCard 
                        nickName={item.nickName}
                        normalName={item.normalName}
                        buttonTitle={item.buttonTitle}
                    />}
                    keyExtractor={item => item.id}
                />
            </GlobalComponent>
    );
}