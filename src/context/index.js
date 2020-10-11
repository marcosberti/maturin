import React from 'react';
import { AuthProvider } from './auth-context';
import { DataProvider } from './data-context';
import { CartProvider } from './cart-context';

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <DataProvider>
        <CartProvider>{children}</CartProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export { AppProviders };
