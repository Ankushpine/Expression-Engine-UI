import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ExpressionForm from './Components/ExpressionForm';

function App() {
  return (
    <div className='mb-5 mt-3'>
      <h2 className="text-primary text-center mt-3 mb-5">Expression Form</h2>
      <ExpressionForm />
    </div>
  );
}

export default App;
