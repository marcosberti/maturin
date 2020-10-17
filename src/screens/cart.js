/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import nProgress from 'nprogress';
import { useData } from '../context/data-context';
import { useCart } from '../context/cart-context';
import { useAuth } from '../context/auth-context';
import { Content, Button, Label, Input } from '../components/lib';
import * as mq from '../styles/media-queries';
import OrderList from '../components/order-list';
import { addOrden } from '../firebase';

const ItemsCarrito = ({ conItems, items }) =>
  conItems ? (
    <OrderList items={items} />
  ) : (
    <div
      css={css`
        flex-basis: 100%;
        ${mq.large} {
          flex-basis: 60%;
        }
      `}
    >
      <span
        css={css`
          display: block;
          box-shadow: 0px 0px 5px 2px #ccc;
          text-align: center;
          padding: 1rem;
          border-radius: 5px;
        `}
      >
        Carrito vacío.{' '}
        <Link
          to="/"
          css={css`
            color: #4c4cea;
            :hover {
              opacity: 0.7;
            }
          `}
        >
          Volver al home
        </Link>{' '}
        para seguir comprando
      </span>
    </div>
  );

const FormularioCompra = ({ disabled, items }) => {
  const { user } = useAuth();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, apellido, telefono, mail, mailConf } = e.target.elements;

    if (!user && mail.value !== mailConf.value) {
      toast.error('Los mails no coinciden');
      return;
    }

    const orden = {
      nombre: nombre.value,
      apellido: apellido.value,
      telefono: telefono.value,
      mail: mail.value,
      items,
    };

    try {
      nProgress.start();
      const id = await addOrden(orden);
      history.push(`/orders/${id}`);
    } catch ({ message }) {
      toast.error(message);
    } finally {
      nProgress.done();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      css={css`
        flex-basis: 100%;
        margin-top: 2rem;
        box-shadow: 0px 0px 5px 2px #ccc;
        text-align: center;
        padding: 2rem;
        border-radius: 5px;

        ${mq.large} {
          margin-top: 0rem;
          flex-basis: 30%;
        }
      `}
    >
      <fieldset
        disabled={disabled}
        css={css`
          border: none;
          margin: 0;
          padding: 0;
          opacity: ${disabled ? 0.75 : 1};
        `}
      >
        <Label htmlFor="nombre" text="nombre" />
        <Input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="nombre"
          required
        />
        <Label htmlFor="apellido" text="apellido" />
        <Input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="apellido"
          required
        />
        <Label htmlFor="telefono" text="telefono" />
        <Input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="telefono"
        />
        <Label htmlFor="mail" text="mail" />
        <Input
          type="email"
          id="mail"
          name="mail"
          placeholder="mail"
          required
          defaultValue={user?.email || null}
        />
        {!user && (
          <React.Fragment>
            <Label htmlFor="mailConf" text="confirmar mail" />
            <Input
              type="email"
              id="mailConf"
              name="mailConf"
              placeholder="confirmar mail"
              required
            />
          </React.Fragment>
        )}
        <Button
          type="submit"
          css={css`
            width: 100%;
            padding: 1rem;
            cursor: ${disabled ? 'default' : 'pointer'};
          `}
        >
          Finalizar compra
        </Button>
      </fieldset>
    </form>
  );
};
const Cart = () => {
  const {
    data: { libros },
  } = useData();
  const { cartItems } = useCart();
  const items = cartItems.reduce((data, id) => {
    if (!data[id]) {
      const libro = libros.find(({ id: _id }) => _id === id);
      data[id] = {
        titulo: libro.titulo,
        imagen: libro.imagenes[0],
        cantidad: 0,
        precio: libro.precio,
        total: 0,
      };
    }
    data[id].cantidad += 1;
    data[id].total = data[id].cantidad * data[id].precio;
    return data;
  }, {});

  const conItems = Boolean(Object.keys(items).length);

  return (
    <Content>
      <span
        css={css`
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 2px;
          display: block;
          text-align: center;
        `}
      >
        Items en carrito
      </span>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 3rem;
          flex-wrap: wrap;
        `}
      >
        <ItemsCarrito conItems={conItems} items={items} />
        <FormularioCompra disabled={!conItems} items={items} />
      </div>
    </Content>
  );
};

export default Cart;
