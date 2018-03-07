import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state;

    axios.post('/api/book', { isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { isbn, title, author, description, published_year, publisher } = this.state;
    return (
      <div classname="container">
        <Panel>
          <Panel.Heading>
            <h3 class="panel-title">
              ADD BOOK
            </h3>
          </Panel.Heading>
          <Panel.Body>
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <FormGroup controlId="isbn">
                <ControlLabel>ISBN:</ControlLabel>
                <FormControl
                 type="text"
                 name="isbn" 
                 value={isbn}
                onChange={this.onChange}
                 placeholder="ISBN"
                required="true" />
              </FormGroup>
              <FormGroup controlId="title">
                <ControlLabel>Title:</ControlLabel>
                <FormControl
                 type="text" 
                 name="title" 
                 value={title} 
                 onChange={this.onChange}
                placeholder="Title"
                required="true" />
              </FormGroup>
              <FormGroup controlId="author">
                <ControlLabel>Author:</ControlLabel>
                <FormControl
                 type="text"
                  name="author"
                  value={author}
                  onChange={this.onChange}
                  placeholder="Author"
                  required="true" />
              </FormGroup>
              <FormGroup controlId="description">
                <ControlLabel>Description:</ControlLabel>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </FormGroup>
              <FormGroup controlId="published_date">
                <ControlLabel>Published Date:</ControlLabel>
                <FormControl
                 type="number"
                 name="published_year" 
                 value={published_year}
                onChange={this.onChange} 
                placeholder="Published Year"
                required="true" />
              </FormGroup>
              <FormGroup controlId="publisher">
                <label for="publisher">Publisher:</label>
                <FormControl 
                type="text" 
                name="publisher"
                value={publisher}
                onChange={this.onChange}
                placeholder="Publisher"
                required="true" 
                />
              </FormGroup>
              <Button type="submit" class="btn btn-default">Submit</Button>
            </form>
          </Panel.Body>
        </Panel>
    </div>
    );
  }
}

export default Create;