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
`;

function Button({ ...rest }) {
  return <ButtonStyled {...rest} />;
}

export default React.memo(Button);
