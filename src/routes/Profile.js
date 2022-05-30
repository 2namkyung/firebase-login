import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../firebase';

export default function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    signOut(authService);
    navigate('/');
  };

  return (
    <button type="button" onClick={logout}>
      Log Out
    </button>
  );
}
