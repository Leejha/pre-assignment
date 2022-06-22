import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  width: 250px;
  height: 35px;
  margin: 0 auto;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: #fafafa;
  padding: 9px 0 7px 8px;
  outline: none;
`;

function Input({ ...rest }) {
  return <InputStyled {...rest} />;
}

export default React.memo(Input);
