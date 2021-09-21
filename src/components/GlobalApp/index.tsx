import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { Container } from './style';

interface GlobalAppProps {
  children: ReactNode
}

export default function GlobalComponent({ children }: GlobalAppProps) {

  return (
    <Container primaryBg={false}>
      <StatusBar backgroundColor={'#666'}/>
      {children}
    </Container>
  )
}