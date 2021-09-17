import React from 'react';

import GlobalApp from '../../components/GlobalApp';

import { 
    FilterList,
    FilterButtonList,
    Container
} from './styles';

import { ListProps } from '../MyEvents';

import { TagButton } from '../../components/TagButton';
import { EventCard } from '../../components/EventCard';
import { List, EventCardsList } from '../MyEvents/styles';
import ResearchInput from '../../components/ResearchInput';

export default function Home() {

    const handleIcon = () => {}

    const data: ListProps[] = [
        {
          id: '1',
          title: 'Fyah Burnin',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
          hourInfo: '16h',
          dateInfo: '06/07/1922',
          paymentInfo: 'Pago',
          isActiveIcon: false,
          handleChangeIcon: handleIcon
        },
        {
            id: '2',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        },
        {
            id: '3',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        },
        { 
            id: '4',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        },
        { 
            id: '5',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        }

    ];

    return (
        <GlobalApp>
            <Container>
                <ResearchInput placeholder='Pesquise por evento, local ou interesse'/>
                <FilterList>
                    <FilterButtonList>
                        <TagButton textBtn='Mais Recentes'style={{marginRight: 8}} />
                    </FilterButtonList>
                </FilterList>
                <List>
                    <EventCardsList 
                        data={data}
                        renderItem={({ item }) =>
                        <EventCard
                            title={item.title}
                            description={item.description}
                            hourInfo={item.hourInfo}
                            dateInfo={item.dateInfo}
                            isActiveIcon={item.isActiveIcon}
                            paymentInfo={item.paymentInfo}
                            handleChangeIcon={item.handleChangeIcon}
                    />}
                    keyExtractor={item => item.id}
                    />
                </List>
            </Container>
        </GlobalApp>
    );
}