import React from 'react';
import styled from 'styled-components';
import { FlexAlignCenter } from '../../libs/styles/utilStyles';
import Button from '../common/Button';
import Input from '../common/Input';

function LoginContainer() {
  return (
    <Form>
      <Logo
        src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
        alt="Instagram"
      />
      <LoginBox>
        <Input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button type="submit" value="로그인" />
      </LoginBox>
    </Form>
  );
}

const Form = styled.form`
  ${FlexAlignCenter};
  flex-direction: column;
`;

const Logo = styled.img`
  width: 175px;
  margin-top: 46px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 118px;
  margin-top: 24px;
`;

export default LoginContainer;
