import React from 'react';
// import nprogress from 'nprogress';
// import { authLogin, authLogout, authReset, authStateChange } from '../firebase';
import { useAsync } from '../hooks/useAsync';
// import { FullPageErrorFallback } from '../components/lib';
// import { ADMIN_MAIL } from '../../private/adminConfig';

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

// const getUserData = async (user) => {
//   if (!user) return null;

//   const { uid, email, displayName, photoURL } = user;

//   return {
//     uid,
//     email,
//     displayName,
//     photoURL,
//   };
// };

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
  } = useAsync();

  const login = React.useCallback(async (email, password) => {
    // await authLogin(email, password);
  }, []);

  const logout = React.useCallback(() => {
    // authLogout();
    setData(null);
  }, [setData]);

  const update = React.useCallback((user) => setData(user), [setData]);

  const reset = React.useCallback((email) => {
    // authReset(email);
  }, []);

  const value = React.useMemo(() => ({ user, login, logout, update, reset }), [
    login,
    logout,
    user,
    update,
    reset,
  ]);

  React.useEffect(() => {
    // nprogress.start();
    const run = async () => {
      setData(null);
      //   authStateChange(async (user) => {
      //     setData(await getUserData(user));
      //     nprogress.done();
      //   });
    };

    run();
  }, [setData]);

  if (isLoading || isIdle) {
    return null;
  }

  if (isError) {
    // return <FullPageErrorFallback error={error.message} />;
    console.log(error);
    return null;
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
