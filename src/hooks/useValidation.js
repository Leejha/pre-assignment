import React, { useState } from 'react';

function useValidation() {
  const [isValidated, setIsValidated] = useState({
    id: true,
    password: true,
  });

  const onCheckId = (e) => {
    const value = e.target.value;
    const idRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!idRegex.test(value)) {
      setIsValidated({ ...isValidated, id: false });
      return;
    }
    setIsValidated({ ...isValidated, id: true });
    return;
  };

  const onCheckPassword = (e) => {
    const value = e.target.value;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setIsValidated({ ...isValidated, password: false });
      return;
    }
    setIsValidated({ ...isValidated, password: true });
    return;
  };
  return { onCheckId, onCheckPassword, isValidated };
}

export default useValidation;
