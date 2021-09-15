import React from 'react';

import { TouchableOpacity } from 'react-native';

import { 
    Container,
    Header,
    EventImage,
    Data,
    Title,
    EventInfo,
    Footer,
    EventDescription,
    Date,
    Hour,
    Payment,
    DateIcon,
    HourIcon,
    PaymentIcon,
    Text,
    Head,
    Heart
} from './styles';

export interface CardProps {
    event_title: string;
    dateInfo: string;
    hourInfo: string;
    paymentInfo: string;
    event_description: string;
}


interface Props {
    data: CardProps
}

export function Event_card( { data }: Props ) {
    return (
        <Container>
            <Header>
                <EventImage />
                <Data>
                   <Head>
                        <Title>{data.event_title}</Title>
                        <TouchableOpacity>
                            <Heart name='favorite-border' />
                        </TouchableOpacity>
                   </Head>
                    <EventInfo>
                        <Date>
                            <DateIcon name='event' />
                            <Text>{data.dateInfo}</Text>
                        </Date>
                        <Hour>
                            <HourIcon name="schedule" />   
                            <Text>{data.hourInfo}</Text>
                        </Hour>
                        <Payment>
                            <PaymentIcon name="attach-money" />
                            <Text>{data.paymentInfo}</Text>
                        </Payment>
                    </EventInfo>
                </Data>
            </Header>
            <Footer>
                <EventDescription>{data.event_description}</EventDescription>
            </Footer>
        </Container>
    );
}