import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button,  Well, Panel} from 'react-bootstrap';
import Menu from "./Menu";

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/book/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div classname="container">
        <Menu/>
        <br/>
        <Panel>
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.book.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <dl>
              <dt>ISBN:</dt>
              <dd>{this.state.book.isbn}</dd>
              <dt>Author:</dt>
              <dd>{this.state.book.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.book.description}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.book.published_year}</dd>
              <dt>Publisher:</dt>
              <dd>{this.state.book.publisher}</dd>
            </dl>
            <Link to={`/edit/${this.state.book._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <Button onClick={this.delete.bind(this, this.state.book._id)} bsStyle="danger">Delete</Button>
          </div>
        </Panel>
      </div>
    );
  }
}

export default Show;
