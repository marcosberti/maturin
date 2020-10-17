import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './screens/home';

const Cart = React.lazy(() => import('./screens/cart'));
const Categories = React.lazy(() => import('./screens/categories'));
const Orders = React.lazy(() => import('./screens/orders'));
const Order = React.lazy(() => import('./screens/order'));
const Login = React.lazy(() => import('./screens/login'));
const BookDetail = React.lazy(() => import('./screens/book-detail'));

let AppRoutes = () => {
  return (
    <React.Suspense fallback={null}>
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
        <Route exact path="/orders/">
          <Orders />
        </Route>
        <Route exact path="/orders/:orderId">
          <Order />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </React.Suspense>
  );
};

AppRoutes = React.memo(AppRoutes);

export default AppRoutes;
