import React from 'react';

import {
    Container,
    List,
    EventCardsList
} from './styles';

export interface ListProps extends CardProps {
    id: string;
}

import { Event_card, CardProps } from '../../components/Event_card';

export function MeusEventos() {
    
        const data : ListProps[] = [
        {
            id: '1',
            event_title: 'Fyah Burnin',
            event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago'
        },
        {
            id: '2',
            event_title: 'Fura Yhtya',
            event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...' ,
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago'
        },{
            id: '3',
            event_title: 'Fura Yhtya',
            event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...' ,
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago'
        },
        {
            id: '4',
            event_title: 'Fura Yhtya',
            event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...' ,
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago'
        },
        {
            id: '5',
            event_title: 'Fura Yhtya',
            event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...' ,
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago'
        }
    ];

    return (
        <Container>
            <List>
                <EventCardsList 
                    data={data}
                    renderItem={ ( { item } ) => <Event_card data={item} />}
                    keyExtractor={item => item.id}
                />
            </List>
            
        </Container>
    );
}