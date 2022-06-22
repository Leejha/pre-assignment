import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../libs/styles/utilStyles';

function LoginHr() {
  return (
    <HrContainer>
      <HalfHr />
      <String>또는</String>
      <HalfHr />
    </HrContainer>
  );
}

const HrContainer = styled.div`
  ${FlexRow};
  width: 100%;
  margin-top: 10px;
`;

const HalfHr = styled.hr`
  height: 1px;
  background-color: #e5e5e5;
  width: 30%;
`;

const String = styled.div`
  font-size: 13px;
  color: #777777;
`;

export default LoginHr;
