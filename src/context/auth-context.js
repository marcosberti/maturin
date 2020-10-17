import React from 'react';
import nprogress from 'nprogress';
import {
  authLogin,
  authLogout,
  authRegister,
  authReset,
  authStateChange,
} from '../firebase';
import { useAsync } from '../hooks/useAsync';
import { FullPageLoading, FullPageErrorFallback } from '../components/lib';
import { toast } from 'react-toastify';

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

const getUserData = (user) => {
  if (!user) return null;

  const { uid, email, displayName, photoURL } = user;

  return {
    uid,
    email,
    displayName,
    photoURL,
  };
};

const AuthProvider = (props) => {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    setData,
    setError,
  } = useAsync();

  const login = React.useCallback(async (email, password) => {
    try {
      nprogress.start();
      await authLogin(email, password);
    } catch ({ message }) {
      toast.error(message);
    }
  }, []);

  const logout = React.useCallback(() => {
    authLogout();
    setData(null);
  }, [setData]);

  const reset = React.useCallback((email) => {
    authReset(email);
  }, []);

  const register = React.useCallback(
    async (email, password) => {
      const { error } = await authRegister(email, password);
      if (error) {
        setError(error.message);
      }
    },
    [setError]
  );

  const value = React.useMemo(
    () => ({ user, login, logout, reset, register }),
    [login, logout, user, reset, register]
  );

  React.useEffect(() => {
    nprogress.start();
    const run = async () => {
      setData(null);
      authStateChange(async (user) => {
        setData(getUserData(user));
        nprogress.done();
      });
    };
    run();
  }, [setData]);

  if (isLoading || isIdle) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error.message} />;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
