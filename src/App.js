import './App.css';
import { Route } from 'react-router';
import React from 'react';
import { Link } from 'react-router-dom';
import Phones from './components/Phones';

function App() {
  return (
    <div className="App">
      <h1>Phones</h1>
      <Link className="link" to="/phones">List</Link>
      <Route path="/phones" component={ Phones } />
    </div>
  );
}

export default App;
