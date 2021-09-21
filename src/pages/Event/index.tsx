import React, {useState} from 'react';
import GlobalComponent from '../../components/GlobalApp';

import bg from '../../assets/images/bg.png';

import { 
    Container,
    BackgroundImage,
    ConfirmArea,
    ConfirmText,
    Done,
    Favorite,
    Separator,
    Main,
    Header,
    Title,
    Createby,
    Menu,
    Info,
    Data,
    Icon,
    DataInfo,
    Local,
    LocalDescription,
    Buttons,
    Description,
    EventDescription
} from './styles';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { TagButton } from '../../components/TagButton';

const icons = {
    calendar: 'calendar-today',
    clock: 'access-time',
    usd: 'attach-money',
    local: 'pin-drop'
}

const filter = {
    confirmed: 'confirmed',
    followers: 'followers'
}

export default function Event() {

    const [btnActive, setBtnActive] = useState('');
    const [filterActive, setFilterActive] = useState('all');
    function handleBtnActive(type: string) {
        setBtnActive(type);
      }
    
    function handleFilterActive(type: string) {
      setFilterActive(type);
    }

    return (
        <GlobalComponent>
            <Container>
                <BackgroundImage source={ bg } />
                <Separator>
                    <ConfirmArea>
                        <ConfirmText>Confirmado</ConfirmText>
                        <Done name='done' />
                    </ConfirmArea>
                    <Favorite name='favorite' />
                </Separator>
            </Container>

            <Main>
                <Header>
                    <View>
                        <Title>Fyre Festival</Title>
                        <Createby>Criado por Bryan</Createby>
                    </View>
                    <TouchableOpacity>
                        <Menu name='more-vert' />
                    </TouchableOpacity>
                </Header>
                <Info>
                    <View style={styles.view}>
                        <Data>
                            <Icon name={icons.calendar} />
                            <DataInfo>23/09/2023</DataInfo>
                        </Data>
                        <Data>
                            <Icon name={icons.clock} />
                            <DataInfo>14:00</DataInfo>
                        </Data>
                        <Data>
                            <Icon name={icons.usd} />
                            <DataInfo>Pago</DataInfo>
                        </Data>
                    </View>
                    <Local>
                        <Icon name={icons.local} />
                        <LocalDescription>Ilha paradisíaca de Great Exuma, Bahamas</LocalDescription>
                    </Local>
                    <Buttons>
                        <TagButton 
                            textBtn='146 Confirmados' 
                            isActive={filterActive === filter.confirmed}
                            handleButton={() => handleFilterActive(filter.confirmed)}
                        />
                        <TagButton 
                            textBtn='560 Seguidores' 
                            isActive={filterActive === filter.followers}
                            handleButton={() => handleFilterActive(filter.followers)} 
                        />
                    </Buttons>
                    <Description>
                        <EventDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget venenatis dolor, at commodo nulla. Donec vehicula massa interdum nisi cursus, quis convallis nibh venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget venenatis dolor, at commodo nulla. Donec vehicula massa interdum nisi cursus, quis convallis nibh venenatis.
                        </EventDescription>
                    </Description>
                </Info>
            </Main>
        </GlobalComponent>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
    }
})

