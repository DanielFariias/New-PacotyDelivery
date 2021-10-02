import Card from '../Card';
import Footer from '../Footer';
import Header from '../Header';
import { Container, Title, Content } from './styles';

interface LayoutProps {
  title: string
  estabelecimentos: any[]
}

const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Title>{props.title}</Title>
      <Content>
        {props.estabelecimentos?.map((lugar) => {
          return (
            <Card title={lugar.title} link={lugar.link} />
          )
        })
        }
      </Content>


      <Footer />
    </Container>
  )
}

export default Layout;