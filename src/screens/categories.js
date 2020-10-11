import React from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../components/book-list';
import { Content } from '../components/lib';
import { useData } from '../context/data-context';

let Categories = () => {
  const { categoryId } = useParams();
  const { data, getData } = useData();

  const { libros, categorias, fetchedCat } = data;

  const { category } = categorias.find(({ id }) => id === categoryId);

  React.useEffect(() => {
    if (!fetchedCat.includes(categoryId)) {
      getData(categoryId);
    }
  }, [categoryId, fetchedCat, getData]);

  const filteredBooks = libros.filter(({ categories = [] }) =>
    categories.includes(categoryId)
  );

  return (
    <Content home>
      <h1>{category}</h1>
      <BookList libros={filteredBooks} />
    </Content>
  );
};

Categories = React.memo(Categories);

export default Categories;
