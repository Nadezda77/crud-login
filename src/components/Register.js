import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import {Button, Form } from 'react-bootstrap';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '', 
      name: '',
      avatar: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, name, avatar } = this.state;

    axios.post('/api/auth/register', { username, password, name, avatar })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { username, password, name, avatar } = this.state;
    return (
      <div className="Login">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <label for="inputName" class="sr-only">Name</label>
          <input type="name" class="form-control" placeholder="Name" name="name" value={name} onChange={this.onChange} required/>
          <label for="inputAvatar" class="sr-only">Avatar</label>
          <input type="avatar" class="avatar-holder"  name="avatar" value={avatar} onChange={this.onChange} required/>
          <Button class="btn btn-lg btn-primary btn-block" type="submit">Register</Button>
        </form>
      </div>
    );
  }
}

export default Register;