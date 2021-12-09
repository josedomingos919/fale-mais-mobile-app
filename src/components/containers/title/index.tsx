import React, { FC, ReactElement } from 'react'
import { Container, Text } from './style'
import { TitleProps } from './type'

const TitleContainer: FC<TitleProps> = ({ label = '' }): ReactElement => {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  )
}

export default TitleContainer
