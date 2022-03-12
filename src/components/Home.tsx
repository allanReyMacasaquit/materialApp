import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
      <Section
        title='Model-3'
        desc='Order Online for Touchless Delivery'
        model='model-3.jpg'
        leftButton='Custome Order'
        rightButton='Existing Customer'
        arrowBottom='/images/down-arrow.svg'/>

      <Section
        title='Model-X'
        desc='Order Online for Touchless Delivery'
        model='model-x.jpg'
        leftButton='Inventory'
        rightButton='Existing Customer'
        arrowBottom='/images/down-arrow.svg'/>

      <Section
        title='Model-S'
        desc='Order Online for Touchless Delivery'
        model='model-s.jpg'
        leftButton='Custome Order'
        rightButton='Existing Customer'
        arrowBottom='/images/down-arrow.svg'/>

      <Section
        title='Model-Y'
        desc='Order Online for Touchless Delivery'
        model='model-y.jpg'
        leftButton='Inventory'
        rightButton='Existing Customer'
        arrowBottom='/images/down-arrow.svg'/>

        <Section
        title='New Design'
        desc='Order Online for Touchless Delivery'
        model='new-interior.jpg'
        leftButton='Order Now'
        rightButton='Call us'
        arrowBottom='/images/down-arrow.svg'/>

        <Section
        title='Panel Roof'
        desc='Best Solar Panel in America'
        model='solar-panel.jpg'
        leftButton='Order Now'
        rightButton='View Details'
        arrowBottom='/images/down-arrow.svg'/>

        <Section
        title='Solar Roof'
        desc='Solar Roof that increases efficency'
        model='solar-roof.jpg'
        leftButton='Inventory'
        rightButton='Existing Customer'
        arrowBottom='/images/down-arrow.svg'/>

        <Section
        title='Accessories'
        model='accessories.jpg'
        leftButton='Shop Now'
        arrowBottom='/images/down-arrow.svg'/>
    </Container>
  )
}

export default Home

const Container = styled.main`
height: 100vh;

`