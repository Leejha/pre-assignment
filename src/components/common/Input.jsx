import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(({ validated, ...rest }, ref) => {
  return <InputStyled validated={validated} ref={ref} {...rest} />;
});

Input.displayName = 'Input';

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
  border: ${({ validated }) =>
    validated ? '1px solid #e5e5e5;' : '2px solid red;'};
`;

export default Input;
