/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { List, Item } from './lib';
import * as mq from '../styles/media-queries';

const OrderList = ({ items }) => {
  let totalOrden = 0;

  return (
    <List
      column
      css={css`
        box-shadow: 0px 0px 5px 2px #ccc;
        flex-basis: 100%;
        ${mq.large} {
          flex-basis: 60%;
        }
      `}
    >
      <React.Fragment>
        {Object.keys(items).map((id) => {
          const item = items[id];
          totalOrden += item.total;
          return (
            <Item
              key={id}
              css={css`
                & > * {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }
              `}
            >
              <img
                src={item.imagen}
                alt={item.titulo}
                width="80"
                css={css`
                  display: none;

                  ${mq.large} {
                    display: block;
                    object-fit: contain;
                    flex-basis: 10%;
                  }
                `}
              />
              <span
                css={css`
                  font-size: 1.25em;
                  font-weight: 500;
                  text-align: start;
                  flex-basis: 35%;
                  padding-left: 1rem;
                `}
              >
                {item.titulo}
              </span>
              <span
                css={css`
                  flex-basis: 1%;
                `}
              >
                x{item.cantidad}
              </span>
              <span
                css={css`
                  flex-basis: 27%;
                `}
              >
                ARS {item.precio}
              </span>
              <span
                css={css`
                  flex-basis: 27%;
                  text-align: end;
                  padding-right: 1rem;
                `}
              >
                ARS {item.total}
              </span>
            </Item>
          );
        })}
        <Item
          css={css`
            & > * {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-top: 2rem;
            }
          `}
        >
          <span
            css={css`
              font-size: 1.5em;
              font-weight: 500;
              flex-basis: 73%;
            `}
          >
            Total Orden
          </span>
          <span
            css={css`
              font-size: 1.5em;
              font-weight: 500;
              flex-basis: 27%;
              text-align: end;
              padding-right: 1rem;
            `}
          >
            ARS {totalOrden}
          </span>
        </Item>
      </React.Fragment>
    </List>
  );
};

export default OrderList;
