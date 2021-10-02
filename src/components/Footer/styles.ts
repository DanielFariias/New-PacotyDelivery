import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 198px;

  background-color: ${({ theme }) => theme.colors.BackgroundHeader};
    display: flex;
    justify-content: space-between;
    flex-direction: column;

  > div {
    padding-top: 35px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > img {
      width: 80px;
      height: 80px;
    }
    > .developers {

      > span {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;


        > p {
          font-size: 18px; 
          font-weight: 600;
          color: white;
          margin: 10px;
        }

        > img {
          width: 25px;
          height: 25px;
          margin: 0 5px;
        }
      }
    }
  }

  > p {
    margin: 0;
    border-top: 1px solid white;
    padding: 12px;
    display: flex;
    justify-content: center;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
