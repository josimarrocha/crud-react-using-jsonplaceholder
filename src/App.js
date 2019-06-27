import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
