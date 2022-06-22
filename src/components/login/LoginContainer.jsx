import React from 'react';
import styled from 'styled-components';
import useLogin from '../../hooks/useLogin';
import useValidation from '../../hooks/useValidation';
import { FlexAlignCenter } from '../../libs/styles/utilStyles';
import Button from '../common/Button';
import Input from '../common/Input';

function LoginContainer() {
  const { idRef, passwordRef, onLogin } = useLogin();
  const { onCheckId, onCheckPassword, isValidated } = useValidation();

  return (
    <Form onSubmit={onLogin}>
      <Logo
        src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
        alt="Instagram"
      />
      <LoginBox>
        <Input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          ref={idRef}
          onChange={onCheckId}
          validated={isValidated.id}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          ref={passwordRef}
          onChange={onCheckPassword}
          validated={isValidated.password}
        />
        <Button
          type="submit"
          value="로그인"
          disabled={
            !isValidated.id ||
            !isValidated.password ||
            !idRef?.current?.value.length ||
            !passwordRef?.current?.value.length
          }
        />
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
