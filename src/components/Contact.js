import React, { Component } from 'react';
import axios from "axios";
import Menu from "./Menu";
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import { Link } from 'react-router-dom';
import {Panel, FormControl, FormGroup, ControlLabel, Button} from "react-bootstrap";

class AddItem extends Component {

  constructor() {
      super();
      this.state = {komentar: ''};
      //this.addItemService = new ItemService();

    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }

    // handleSubmit(event) {
    //   alert(this.state.value);
    //   event.preventDefault();
    //   this.addItemService.sendData(this.state.value);
    //   this.props.history.push('/items');
    // }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
    onSubmit = (e) => {
        e.preventDefault();
    
        const { komentar } = this.state;
       
        axios.post('/api/item/add-item', { komentar })
          .then((result) => {
            this.props.history.push("/items")
          });
      }

    render() {
        const {komentar}= this.state;
      return (
        <div className="container">
        <Menu/>
        <br/>
        <Panel>
          <form onSubmit={this.onSubmit}>
            <ControlLabel> Contact Us: </ControlLabel>
             
            <FormControl type="text" value={komentar} onChange={this.onChange} />
           <br/>
            <Button type="submit" value="Submit" />
          </form>
          </Panel>
      </div>
      );
    }
  }

export default AddItem;