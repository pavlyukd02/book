// components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const currentUser = useAuth();

  if (currentUser === undefined) {
    // Индикатор загрузки, пока идет проверка состояния пользователя
    return <div>Загрузка...</div>;
  }

  // Если пользователь авторизован, показываем административную панель
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
