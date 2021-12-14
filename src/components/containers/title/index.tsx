import React from 'react'
import { Container, Text } from './style'
import { TitleProps } from './type'

const TitleContainer = ({ label = '' }: TitleProps): JSX.Element => (
  <Container>
    <Text>{label}</Text>
  </Container>
)

export default TitleContainer
