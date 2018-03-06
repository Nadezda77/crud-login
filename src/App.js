import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Panel} from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
          <Panel>
            <div class="panel-heading">
              <h3 class="panel-title">
                BOOK CATALOG &nbsp;
                {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
              </h3>
            </div>
            <div class="panel-body">
              <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>ISBN</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.books.map(book =>
                      <tr>
                        <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.description}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Panel>
          );
  }
}

export default App;