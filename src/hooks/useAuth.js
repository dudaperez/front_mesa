import { useEffect } from 'react';
import { isAuthenticated, logIn, logOut } from '@/services/auth';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  const handleLogin = async (username, password) => {
    await logIn(username, password)
    navigate('/');
  };

  const handleLogout = () => {
    logOut()
    navigate('/login');
  };

  return { isAuthenticated, handleLogin, handleLogout };
};

export default useAuth;
