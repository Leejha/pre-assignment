import React from 'react';
import styled from 'styled-components';

function LoginPage() {
  return (
    <LoginForm>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </LoginForm>
  );
}

export default LoginPage;
