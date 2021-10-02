import HeaderButton from '../HeaderButton';
import { IconClothes, IconDrugStore, IconHairDressers, IconMarket, IconOthers, IconRestaurant } from '../Icons';
import { Container, Logo, IconLogo, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <IconLogo src="./images/DeliveryMan.svg" />
        <p className='first'>Pacoty</p>
        <p className='last'>Delivery</p>
      </Logo>
      <Content>
        <HeaderButton
          icon={IconDrugStore(30)}
          type="DrugStore"
          title='Farmacias'
        />
        <HeaderButton
          icon={IconRestaurant(30)}
          type="Restaurant"
          title='Restaurantes'
        />
        <HeaderButton
          icon={IconMarket(30)}
          type="Market"
          title='Mercados'
        />
        <HeaderButton
          icon={IconHairDressers(30)}
          type="Beauty"
          title='Cabeleireiros(as)'
        />
        <HeaderButton
          icon={IconClothes(30)}
          type="Clothes"
          title='Moda e Roupas'
        />
        <HeaderButton
          icon={IconOthers(30)}
          type="Others"
          title='Variedades'
        />
      </Content>
    </Container>
  )
}

export default Header;