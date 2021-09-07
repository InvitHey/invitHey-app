import React, { useState } from 'react';

import { EventCard } from '../../components/EventCard';

import GlobalApp from '../../components/GlobalApp';


export default function TestPage() {
  
  const [activeIcon, setActiveIcon] = useState(false); 
  function handleChangeIcon(){
      setActiveIcon((activeIcon) => !activeIcon)
  }

  return (
    <GlobalApp>
      <EventCard 
        handleChangeIcon={handleChangeIcon}
        isActiveIcon={activeIcon}
        title='Fyre Festival'
        dateInfo='22/06/2021'
        hourInfo='09:00'
        paymentInfo='Pago'
        footerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec   vulputate pulvinar. Phasellus purus neque...'
      />
    </GlobalApp >
  )
}