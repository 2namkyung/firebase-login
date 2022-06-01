import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import { authService } from './firebase';

export default function App() {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }

      setInit(true);
    });
  }, []);

  if (init) {
    return <AppRouter isLogin={isLogin} />;
  }

  return <span>Initializing . . . </span>;
}
