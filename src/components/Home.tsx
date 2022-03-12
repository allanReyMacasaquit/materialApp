import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
      <Section
      title='Model-3'
      desc='Order Online for Touchless Delivery'
      bgImage='3'
      leftButton='Inventory'
      rightButton='Existing Customer'/>
       <Section
      title='Model-X'
      desc='Order Online for Touchless Delivery'
     bgImage='x'
       leftButton='Inventory'
      rightButton='Existing Customer'/>
      <Section
      title='Model-S'
      desc='Order Online for Touchless Delivery'
      bgImage='s'
       leftButton='Inventory'
      rightButton='Existing Customer'/>
      <Section
      title='Model-Y'
      desc='Order Online for Touchless Delivery'
      bgImage='y'
       leftButton='Inventory'
      rightButton='Existing Customer'/>
    </Container>
  )
}

export default Home

const Container = styled.main`
height: 100vh;

`