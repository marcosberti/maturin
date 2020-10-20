import React from 'react';
import { useAsync } from '../hooks';
import { fetchData, getCollectionData } from '../firebase';
import { FullPageLoading, FullPageErrorFallback } from '../components/lib';
import { getTime } from '../helpers/';
import { useAuth } from './auth-context';

const DataContext = React.createContext();
DataContext.displayName = 'DataContext';

const getBooksData = async (options = {}) => {
  const { libros, categorias } = await fetchData([
    { name: 'libros', url: 'books', ...options },
    { name: 'categorias', url: 'categories' },
  ]);

  return {
    libros: libros.sort((a, b) => (getTime(a) > getTime(b) ? -1 : 1)),
    categorias,
  };
};

const getOrdersData = async (user) => {
  const data = await getCollectionData({
    url: 'orders',
    filter: ['mail', '==', user.email],
  });

  return { ordenes: data };
};

const reducer = (s, a) => {
  if (a.status === 'resolved') {
    return {
      ...s,
      ...a,
      data: {
        ...s.data,
        ...a.data,
        libros: a.data.libros
          ? a.data.libros.reduce((libros, libro) => {
              const existe = Boolean(libros.find(({ id }) => id === libro.id));
              if (!existe) {
                return [...libros, libro];
              }
              return libros;
            }, s.data.libros)
          : s.data.libros,
        fetchedCat: [...s.data.fetchedCat, ...a.data.fetchedCat],
      },
    };
  }

  return { ...s, ...a };
};

const DataProvider = (props) => {
  const {
    data,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync(
    { data: { libros: [], categorias: [], fetchedCat: [], ordenes: null } },
    reducer
  );
  const { user } = useAuth();

  const safeGetData = React.useCallback(
    async (categoryId) => {
      const filter = ['categories', 'array-contains', categoryId];
      run(getBooksData({ filter }), categoryId);
    },
    [run]
  );

  React.useEffect(() => {
    run(getBooksData({ limit: 6 }));
  }, [run]);

  React.useEffect(() => {
    if (!user && data.ordenes) {
      setData({ ...data, ordenes: null });
    } else if (user && !data.ordenes) {
      run(getOrdersData(user));
    }
  }, [data, run, setData, user]);

  const value = React.useMemo(() => ({ data, getData: safeGetData, setData }), [
    data,
    safeGetData,
    setData,
  ]);

  if (isLoading || isIdle) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  if (isSuccess) {
    return <DataContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
};

const useData = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};

export { DataProvider, useData };
