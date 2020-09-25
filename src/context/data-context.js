import React from 'react';
import nprogress from 'nprogress';
import { getCollection } from '../firebase';

const DataContext = React.createContext();
DataContext.displayName = 'DataContext';

const getData = async () => {
  return await getCollection('books');
};

const DataProvider = (props) => {
  const [libros, setLibros] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    nprogress.start();
    setTimeout(async () => {
      const data = await getData();
      console.log('data', data);
      nprogress.done();
      setLibros(data);
      setLoading(false);
    }, 2000);
  }, []);

  return <DataContext.Provider value={{ libros, loading }} {...props} />;
};

const useData = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};

export { DataProvider, useData };
