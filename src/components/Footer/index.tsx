import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return <Container>
    <div>
      <img src="./images/DeliveryMan.svg" />
      <div className="developers">
        <span>
          <p>Daniel Farias</p>
          <img src="./images/Instagram.svg" />
          <img src="./images/Github.svg" />
        </span>
        <span>
          <p>Anthony Davi</p>
          <img src="./images/Instagram.svg" />
          <img src="./images/Github.svg" />
        </span>
      </div>
    </div>
    <p>copyright © 2021 todos os direitos reservados</p>
  </Container>
}

export default Footer;