import React from 'react';
import GlobalStyles from './globalStyles';
import Home from './screens/home';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home greeting="Bienvenidos a Maturi's Books " />
    </>
  );
}

export default App;
