import React from 'react'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

interface Props {
  title?: string,
  desc?: string,
  model: string,
  leftButton?: string,
  rightButton?: string,
  arrowBottom?: string 

}

function Section({title, desc, model, leftButton, rightButton, arrowBottom}: Props) {
    
  return (
    <Container brand={model}>
      <Fade direction='up'>
        <ItemText>
            <h1>{title}</h1>
            <p>{desc}</p>
        </ItemText> 
      </Fade>
        <Button>
          <Fade direction='up'>
            <ButtonGroup>
                <LeftButton>
                {leftButton}
                </LeftButton>
                {rightButton &&
                <RightButton>
                   {rightButton}
                </RightButton>}
            </ButtonGroup>
          </Fade>
            <DownArrow>
                <img style={{height: '40px'}} src={arrowBottom} alt='arrow'/>
            </DownArrow>
        </Button>
      
        
    </Container>
  )
}

export default Section

const Container = styled.div<{brand: string}>`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-epeat: no-repeat;
    background-image: ${props => `url('/images/${props.brand}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.85;
    color: black;
`
const animateDown = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
}
` 
const DownArrow = styled.div`
    animation: ${animateDown} infinite 1.5s;
`