import React from 'react';

import GlobalApp from '../../components/GlobalApp';
import ResearchInput from '../../components/ResearchInput';

import { PeopleCard } from '../../components/PeopleCard';
import { EventCard } from '../../components/EventCard';

export default function TestPage() {

  return (
    <GlobalApp>
      <PeopleCard nickName='aiudh' normalName='oaidu'/>
    </GlobalApp >
  )
}