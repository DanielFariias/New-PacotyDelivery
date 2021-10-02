import React from 'react';
import UsePageData from '../../hooks/usePageData';
import { Container } from './styles';

interface HeaderButtonProps {
  icon: any
  type: string
  title: string
}

const HeaderButton = (props: HeaderButtonProps) => {
  const context = UsePageData()
  let selected = false
  if (props.title === context.title) {
    selected = true
  }
  return (
    <Container
      className={selected ? "selected" : ''}
      onClick={() => {
        context.alterarType(props.type)
        context.alterarTitle(props.title)
      }}
    >
      {props.icon}
    </Container>
  )
}

export default HeaderButton;