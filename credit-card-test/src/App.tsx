import React, { FC } from 'react';
import CreditCardInput from './components/CreditCardInput';
import './App.css';

const App:FC = () => {
  return (
    <div className="app__container">
      <CreditCardInput />
    </div>
  );
};

export default App;
