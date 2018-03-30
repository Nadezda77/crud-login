import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Galerija from './components/Gallery';
import About from './components/About';




ReactDOM.render(
  <Router>
      <div className="container">
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/about' component={About} />
          <Route path='/register' component={Register} />
          <Route path='/gallery' component={Galerija} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/create' component={Create} />
          <Route path='/show/:id' component={Show} />
        <Footer/>
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();