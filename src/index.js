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

import Footer from './components/Footer';
import Galerija from './components/Gallery';
import About from './components/About';
import Public from './components/Public';
//import AddItem from './components/Contact';
//import IndexItem from './components/IndexItem';






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
          <Route path='/public' component={Public} />
          {/* <Route path='/add-item' component={AddItem} /> */}
          {/* <Route path='/items' component={IndexItem} /> */}
        <Footer/>
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();