import React from 'react';
import { useAsync } from '../hooks';
import { fetchData, getCollectionData } from '../firebase';
import { FullPageLoading } from '../components/lib';
import { getTime } from '../helpers/';
import { useAuth } from './auth-context';

// const libro = {
//   id: 'N1ZdXwCMKoVe7Z16n9jW',
//   paginas: 1138,
//   publicacion: 2017,
//   categories: [
//     'XDdWOM743PAQQmyWBq8n',
//     'rBrqyAWDAMFCdx9GQOoQ',
//     ' ypjk33WxctEP8x6Fxc56',
//   ],
//   titulo: 'IT',
//   imagenes: [
//     'https://restaurantdelamente.com/4529-large_default/it-ingles.jpg',
//     'https://restaurantdelamente.com/4530-large_default/it-ingles.jpg',
//   ],
//   stock: 20,
//   nroCopia: "''",
//   isnb: '9781501142970',
//   fecha: { seconds: 1602212400, nanoseconds: 0 },
//   descripcion:
//     'Nueva edición en inglés, en tapas duras con sobrecubierta, publicado por Scribner.',
//   precio: 3000,
//   sinopsis:
//     '¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela.     Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre.',
//   descuento: 0,
// };

// const getDataDummy = async () => {
//   const libros = [libro, { ...libro, stock: 0 }, libro, libro, libro];

//   return {
//     libros,
//     categorias: [
//       { id: 'asd1', category: 'ingles' },
//       { id: 'asd2', category: 'castellano' },
//       { id: 'asd2', category: 'comics' },
//       { id: 'asd4', category: 'merchandasing' },
//     ],
//   };
// };

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
    if (user && !data.ordenes) {
      run(getOrdersData(user));
    }
  }, [data.ordenes, run, user]);

  const value = React.useMemo(() => ({ data, getData: safeGetData }), [
    data,
    safeGetData,
  ]);

  if (isLoading || isIdle) {
    return <FullPageLoading />;
  }

  if (isError) {
    console.error('todo: error fallback');
    throw new Error(error);
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
