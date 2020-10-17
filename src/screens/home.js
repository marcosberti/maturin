import React from 'react';
import BookList from '../components/book-list';
import { Content } from '../components/lib';
import { useData } from '../context/data-context';

const Home = () => {
  const {
    data: { libros },
  } = useData();

  return (
    <Content home>
      <h1>¡Te damos la bienvenida a Maturin's books!</h1>
      <h2>Libros y merchandasing de Stephen King</h2>
      <h3>Novedades</h3>
      <BookList libros={libros.slice(0, 6)} />
    </Content>
  );
};

export default Home;
