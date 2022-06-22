import React, { useCallback } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import userStorage from '../../libs/utils/userStorage';

function UserIcon() {
  const onLogout = useCallback(() => {
    userStorage.remove();
  }, []);

  return <FaRegUserCircle size={20} onClick={onLogout} />;
}

export default UserIcon;
