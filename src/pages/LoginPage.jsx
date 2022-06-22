import React from 'react';
import styled from 'styled-components';
import LoginContainer from '../components/login/LoginContainer';
import OtherContainer from '../components/login/OtherContainer';

function LoginPage() {
  return (
    <Layout>
      <LoginBox>
        <LoginContainer />
        <OtherContainer />
      </LoginBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #ffff;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  padding: 0 46px;
`;

export default LoginPage;
