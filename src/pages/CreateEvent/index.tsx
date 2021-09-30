import React, {useState} from 'react';
import { View } from 'react-native';

import {
    Title,
    Category,
    Separator,
    Section,
    Case,
    InputsList,
    Div,
    Row,
    Condition,
    EventDescription,
} from './styles';

type Props = {
    title: string;
}

import GlobalComponent from '../../components/GlobalApp';
import { Input } from '../../components/ResearchInput/styles';
import ButtonSwitch from '../../components/ButtonSwitch';
import { EventCategory } from '../../components/EventCategory';

export function CreateEvent( { title }: Props ) {

    const [enabled, setEnabled] = useState(false);
    function handleChange() {
        setEnabled(!enabled)
    }

    return (
        <GlobalComponent>
            <InputsList>
                <Section>
                    <Title style={{marginTop: 0, marginBottom: 24}}>Seleção de Privacidade</Title>
                    <Category>
                        <ButtonSwitch 
                            isEnabled={enabled}
                            toggleSwitch={handleChange}
                        />
                        <Case>Evento Privado</Case>
                    </Category>
                    <Category>
                        <ButtonSwitch 
                            isEnabled={enabled}
                            toggleSwitch={handleChange}
                        />
                        <Case>Evento Público</Case>
                    </Category>
                    <Category style={{marginBottom: 24}}>
                        <ButtonSwitch 
                            isEnabled={enabled}
                            toggleSwitch={handleChange}
                        />
                        <Case>Evento para amigos de amigos</Case>
                    </Category>
                </Section>
                <Separator />
                <View style={{flex: 1}}>
                    
                        <Title>Nome do Evento</Title>
                        <Input placeholder='Digite o nome do evento' />
                        <Row>
                            <Div>    
                                <Title>Data</Title>
                                <Input placeholder='Data' />
                            </Div>
                            <Div>
                                <Title>Horário</Title>
                                <Input placeholder='Horário' />
                            </Div>
                        </Row>
                        <Title>Cep</Title>
                        <Input placeholder='00000-00' />
                        <Row>
                            <Div>    
                                <Title>Rua</Title>
                                <Input placeholder='Rua' />
                            </Div>
                            <Div>
                                <Title>Número</Title>
                                <Input placeholder='Número' />
                            </Div>
                        </Row>
                        <Row>
                            <Div>    
                                <Title>Bairro</Title>
                                <Input placeholder='Bairro' />
                            </Div>
                            <Div>
                                <Title>Estado</Title>
                                <Input placeholder='Estado' />
                            </Div>
                        </Row>
                        <Title>Cidade</Title>
                        <Input placeholder='Selecione a cidade' />
                        <Row>
                            <Title>Descrição do Evento</Title>  
                            <Condition>(Max. 425 caracteres)</Condition>  
                        </Row>
                            <EventDescription 

                            />
                        <Separator />
                        <Title>Selecione o tipo de evento:</Title>
                </View>
                <EventCategory 
                    title='Social'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Corporativo'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Religioso'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Acadêmico e Educacional'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Cultural e entretenimento'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Esportivo'
                    onPress={() => {}}
                />
            </InputsList>

        </GlobalComponent>
    );
}