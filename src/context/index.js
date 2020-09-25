import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
import { AuthProvider } from './auth-context';
import { DataProvider } from './data-context';
import { CartProvider } from './cart-context';

function AppProviders({ children }) {
  return (
    <>
      {/* <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
      /> */}
      {/* <Router> */}
      <AuthProvider>
        <DataProvider>
          <CartProvider>{children}</CartProvider>
        </DataProvider>
      </AuthProvider>
      {/* </Router> */}
    </>
  );
}

export { AppProviders };
