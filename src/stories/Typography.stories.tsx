import React from 'react'
import Heading from '../components/Typography/Heading'

export default {
  title: 'Typography',
  component: Heading
}

export const Heading1 = () => <Heading varients={1}>This is heading 1 with 5 rem</Heading>
export const Heading2 = () => <Heading varients={2}>This is heading 2 with 4 rem</Heading>
export const Heading3 = () => <Heading varients={3}>This is heading 3 with 3 rem</Heading>
export const Heading4 = () => <Heading varients={4}>This is heading 3 with 2 rem</Heading>
export const DeafultTag = () => <Heading varients={5}>This is the default </Heading>
