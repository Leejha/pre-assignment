import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import userStorage from '../libs/utils/userStorage';

function useLogin() {
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const id = idRef?.current?.value;
  const navigate = useNavigate();

  const onLogin = useCallback(() => {
    userStorage.set(id);
    navigate('/feed');
  }, [id]);

  return {
    idRef,
    passwordRef,
    onLogin,
  };
}

export default useLogin;
