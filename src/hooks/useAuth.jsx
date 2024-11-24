// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(undefined); // Начальное значение undefined для корректной проверки

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Состояние пользователя изменилось:', user);
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
};
