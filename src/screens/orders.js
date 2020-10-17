/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { useData } from '../context/data-context';
import { Content, List, ListItem } from '../components/lib';
import OrderList from '../components/order-list';
import { Link } from 'react-router-dom';

const Orders = () => {
  const {
    data: { ordenes },
  } = useData();

  console.log('data', ordenes);

  return (
    <Content>
      <List main row>
        {ordenes.map(({ id, mail, items }) => (
          <ListItem orderItem key={id}>
            <Link to={`/orders/${id}`}>
              <div
                css={css`
                  padding: 1rem;
                `}
              >
                <div>Orden nro: {id}</div>
                <div>mail: {mail}</div>
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
        ))}
      </List>
    </Content>
  );
};

export default Orders;
