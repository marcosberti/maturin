import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './screens/home';
import BookDetail from './screens/book-detail';
import Cart from './screens/cart';
import Categories from './screens/categories';
import Order from './screens/order';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/item/:id">
        <BookDetail />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/categories/:categoryId">
        <Categories />
      </Route>
      <Route exact path="/order/:orderId">
        <Order />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
