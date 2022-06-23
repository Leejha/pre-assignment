import React, { useCallback } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import userStorage from '../../libs/utils/userStorage';

function UserIcon() {
  const navigate = useNavigate();
  const onLogout = useCallback(() => {
    userStorage.remove();
    navigate('/');
  }, []);

  return <FaRegUserCircle size={20} onClick={onLogout} />;
}

export default UserIcon;
