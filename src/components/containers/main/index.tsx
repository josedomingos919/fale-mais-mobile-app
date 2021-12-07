import React, { FC, ReactElement } from 'react'
import { Container } from './style'
import { MainProps } from './type'

const MainContainer: FC<MainProps> = ({ children }): ReactElement => {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

export default MainContainer
