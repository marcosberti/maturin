/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { useData } from '../context/data-context';
import { Content, List, ListItem } from '../components/lib';
import OrderList from '../components/order-list';
import { Link, Redirect } from 'react-router-dom';
import * as mq from '../styles/media-queries';
import { formatDate } from '../helpers';
import { useAuth } from '../context/auth-context';

const Orders = () => {
  const { user } = useAuth();
  const {
    data: { ordenes },
  } = useData();

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <Content>
      <h1
        css={css`
          margin-bottom: 2rem;

          ${mq.large} {
            margin-left: 2rem;
          }
        `}
      >
        Mis ordenes
      </h1>
      <List main row>
        {ordenes.length ? (
          ordenes.map(({ id, fecha, items }) => (
            <ListItem orderItem key={id}>
              <Link
                to={`/orders/${id}`}
                css={css`
                  flex-wrap: wrap;
                `}
              >
                <div
                  css={css`
                    padding: 1rem;
                  `}
                >
                  <div>Orden nro: {id}</div>
                  <div
                    css={css`
                      margin-top: 1rem;
                    `}
                  >
                    Fecha: {formatDate('long', fecha)}
                  </div>
                </div>
                <div
                  css={css`
                    padding: 1rem;
                  `}
                >
                  Items
                </div>
                <OrderList items={items} />
              </Link>
            </ListItem>
          ))
        ) : (
          <div>
            Aun no tiene ordenes. Ir al{' '}
            <Link
              to="/"
              css={css`
                color: #4c4cea;
                :hover {
                  opacity: 0.7;
                }
              `}
            >
              home
            </Link>{' '}
            para seguir comprando!
          </div>
        )}
      </List>
    </Content>
  );
};

export default Orders;
