import React from 'react';

import GlobalApp from '../../components/GlobalApp';
import ResearchInput from '../../components/ResearchInput';

import { PeopleCard } from '../../components/PeopleCard';

export default function TestPage() {

  return (
    <GlobalApp>
     <PeopleCard 
      nickName='Bryan'
      text='Nao sei'
      user='Bryan'
     />
    </GlobalApp >
  )
}