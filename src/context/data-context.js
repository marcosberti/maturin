import React from 'react';
import nprogress from 'nprogress';

const DataContext = React.createContext();
DataContext.displayName = 'DataContext';

const IDIOMAS = {
  ingles: 'Inglés',
  español: 'Español',
};

const EDICION = {
  bolsillo: 'Bolsillo',
  tapaDura: 'Tapa dura',
  rustica: 'Rustica',
};

const ESTADOS = {
  nuevo: 'Nuevo',
  usado: 'Usado',
};

const libro = {
  id: Math.ceil(Math.random() * (1 + 10000) + 1),
  titulo: 'IT',
  descripcion:
    'Nueva edición en inglés, en tapas duras con sobrecubierta, publicado por Scribner.',
  fecha: new Date(),
  stock: 5,
  precio: 3000,
  descuento: 0,
  imagenes: [
    {
      url:
        'https://www.restaurantdelamente.com/stephen-king/img/p/2758-6262-thickbox.jpg',
    },
    {
      url:
        'https://www.restaurantdelamente.com/stephen-king/img/p/2758-6263-thickbox.jpg',
    },
  ],
  isnb: '9781501142970',
  publicacion: 2017,
  idioma: IDIOMAS.ingles,
  // nroEdicion
  edicion: EDICION.tapaDura,
  paginas: '1138',
  estado: ESTADOS.nuevo,
  sinopsis: `¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela.
    Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre.`,
  firmado: false,
  nroCopia: '',
};

const getData = async () => {
  return Promise.resolve([
    libro,
    { ...libro, stock: 0, id: Math.ceil(Math.random() * (1 + 10000) + 1) },
    { ...libro, descuento: 20, id: Math.ceil(Math.random() * (1 + 10000) + 1) },
  ]);
};

const DataProvider = (props) => {
  const [libros, setLibros] = React.useState([]);

  React.useEffect(() => {
    nprogress.start();
    setTimeout(async () => {
      const data = await getData();
      nprogress.done();
      setLibros(data);
    }, 2000);
  }, []);

  return <DataContext.Provider value={libros} {...props} />;
};

const useData = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};

export { DataProvider, useData };
