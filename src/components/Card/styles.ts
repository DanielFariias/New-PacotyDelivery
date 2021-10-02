import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 60px;

  margin: .5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E8EEF1;

  border-radius: 10px;

  > p {
    padding-left: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2b282a;
  }
  > button {
    height: 100%;
    width: 80px;
    border-radius: 0 10px 10px 0;

    border: none;
    background-color: #40bb45;

    transition: ease-in-out .5s;
    cursor: pointer;

    &:hover {
      background-color: #2B7B2E;

    }
  }
`;
