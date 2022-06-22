import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.input`
  width: 250px;
  width: 250px;
  height: 28px;
  margin: 0 auto;
  font-weight: 600;
  background-color: #0095f6;
  color: #ffff;
  border-radius: 4px;
  cursor: pointer;
  :disabled {
    background-color: #bde5ff;
  }
`;

function Button({ ...rest }) {
  return <ButtonStyled {...rest} />;
}

export default Button;
