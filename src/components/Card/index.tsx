import { IconWhatsapp } from '../Icons';
import { Container } from './styles';

interface CardProps {
  title: string
  link: string
}

const Card = (props: CardProps) => {
  return (
    <Container>
      <p>{props.title}</p>
      <button
        onClick={() => { window.location.href = props.link }}
      >
        {IconWhatsapp(38)}
      </button>
    </Container >
  )
}

export default Card;