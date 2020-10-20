/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link, Redirect, useParams } from 'react-router-dom';
import { getDoc } from '../firebase/';
import OrderList from '../components/order-list';
import { Content, FullPageLoading } from '../components/lib';
import { useAuth } from '../context/auth-context';

const Order = () => {
  const [order, setOrder] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { orderId } = useParams();
  const loadingRef = React.useRef(true);
  const { user } = useAuth();

  React.useEffect(() => {
    const run = async () => {
      const { data, error } = await getDoc('orders', orderId);

      loadingRef.current = false;
      if (error) {
        setError(error.message);
      }
      setOrder(data);
    };

    if (user) {
      run();
    }
  }, [orderId, user]);

  if (!user) {
    return <Redirect to="/" />;
  }

  return loadingRef.current ? (
    <FullPageLoading />
  ) : (
    <Content>
      {error ? (
        <div>Error al buscar la orden: {error}</div>
      ) : order ? (
        <div>
          <span
            css={css`
              display: block;
              font-size: 1.5rem;
              font-weight: 600;
            `}
          >
            Detalles de la orden
          </span>
          <span
            css={css`
              display: block;
              margin-top: 1rem;
            `}
          >
            Nro de orden: {orderId}
          </span>
          <span
            css={css`
              display: block;
              margin-top: 1rem;
            `}
          >
            Nombre: {order.nombre} {order.apellido}
          </span>
          <span
            css={css`
              display: block;
              margin-top: 1rem;
            `}
          >
            Mail: {order.mail}
          </span>
          <div
            css={css`
              margin-top: 1rem;
            `}
          >
            <OrderList items={order.items} />
          </div>
        </div>
      ) : (
        <div>
          <span>No existe la orden ingresada</span>
          <Link
            to="/"
            css={css`
              color: #4c4cea;
              display: block;
              :hover {
                opacity: 0.7;
              }
            `}
          >
            Volver al home
          </Link>
        </div>
      )}
    </Content>
  );
};

export default Order;
