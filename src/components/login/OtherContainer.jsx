import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import styled from 'styled-components';
import { FlexCenter } from '../../libs/styles/utilStyles';
import LoginHr from './LoginHr';

function OtherContainer() {
  return (
    <Container>
      <LoginHr />
      <FacebookH3>
        <FackbookLogo />
        Facebook으로 로그인
      </FacebookH3>
      <FindPasswordStyled>비밀번호를 잊으셨나요?</FindPasswordStyled>
    </Container>
  );
}

const Container = styled.div`
  ${FlexCenter};
  flex-direction: column;
`;

const FacebookH3 = styled.h3`
  color: #385185;
  font-size: 13px;
  font-weight: 700;
  margin-top: 12px;
`;
const FindPasswordStyled = styled.div`
  color: #183d8c;
  font-size: 11px;
  font-weight: 600;
  margin: 16px 0;
`;
const FackbookLogo = styled(AiFillFacebook)`
  margin-right: 4px;
`;

export default OtherContainer;
