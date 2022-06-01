import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../firebase';

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    signOut(authService);
    navigate('/');
  };

  return (
    <>
      <h1>Success Login</h1>
      <button
        type="button"
        onClick={logout}
        className="bg-black hover:bg-white-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
      >
        Log Out
      </button>
    </>
  );
}
