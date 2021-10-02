import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  box-shadow: 1px 1px 2px black;

  width: 55px;
  height: 55px;
  background-color: #f1f1f1;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: .2s ease-in-out;

  &.selected {
    border: 5px solid #4CAF50;
  }

  &:hover {
    background-color: #c1c1c1;
  }
`;
