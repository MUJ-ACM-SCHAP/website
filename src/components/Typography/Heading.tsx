import styled from 'styled-components'
import { DEVICES } from '../Breakpoints'

interface PROPTYPES {
  varients: number
  mediaQueryType?: DEVICES
  theme: any
}

const getFontSizeBasedOnVarient = (varients: number, mediaQueryType?: DEVICES) => {
  switch (varients) {
    case 1:
      return '5rem'
    case 2:
      return '4rem'
    case 3:
      return '3rem'
    case 4:
      return '2rem'
    default:
      return '1rem'
  }
}

const Heading = styled.h1<{ varients: number }>`
  color: ${(props: PROPTYPES) => props.theme.primary};
  font-size: ${(props: PROPTYPES) => getFontSizeBasedOnVarient(props.varients, props.mediaQueryType)};
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
`

export default Heading
