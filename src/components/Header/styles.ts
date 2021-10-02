import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 220px;

  background-color: ${({ theme }) => theme.colors.BackgroundHeader};

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0 0 30px 30px;

  box-shadow: 1px 1px 8px ${({ theme }) => theme.colors.BackgroundHeader};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 10px;

  > p {
    font-size: 2rem;
    text-shadow: 1px 1px 2px black;
    
    &.first {
      color: #FFC269;
      margin-left: 10px;
    }

    &.last {
      color: #4CAF50;
    }
  }
`


export const IconLogo = styled.img`
  width: 45px;
  height: 45px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
