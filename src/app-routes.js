import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './screens/home';
import BookDetail from './screens/book-detail';
import Cart from './screens/cart';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home greeting="Bienvenidos a Maturin's Books " />
      </Route>
      <Route exact path="/item/:id">
        <BookDetail />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
