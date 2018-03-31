import React, { Component } from 'react';

import axios from 'axios';
import TableRow from './TableRow';
import Menu from "./Menu";

class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', items: ''};

      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }


       onSubmit = (e) => {
    e.preventDefault();

    const { value, items } = this.state;
        axios.post('/api/item', { value, 
        items
      })
      .then((result) => {
        this.props.history.push("/items")
      });
      
      }
      
    render() {
        const { value, items} = this.state;
      return (
        <div className="container">
            <Menu/>
            <br/>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Item</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }

export default IndexItem;