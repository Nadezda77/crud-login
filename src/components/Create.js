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
      <Well>
        <Panel>
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD BOOK
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <FormGroup controlId="isbn">
                <label for="isbn">ISBN:</label>
                <input type="text" class="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
              </FormGroup>
              <FormGroup controlId="title">
                <ControlLabel>Title:</ControlLabel>
                <FormControl
                 type="text" 
                 name="title" 
                 value={title} 
                 onChange={this.onChange}
                  placeholder="Title" />
              </FormGroup>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="published_date">Published Date:</label>
                <input type="number" class="form-control" name="published_year" value={published_year} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div class="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <Button type="submit" class="btn btn-default">Submit</Button>
            </form>
          </div>
        </Panel>
      </Well>
    </div>
    );
  }
}

export default Create;