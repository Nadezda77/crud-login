import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Panel} from 'react-bootstrap';
import Menu from "./components/Menu";


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
      <div className="container">
        <Menu/>
        <br/>
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
                    {/* <th scope="col">ISBN</th> */}
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.books.map(book =>
                    <tr>
                      {/* <td>{book.isbn}</td> */}
                      <td><Link to={`/show/${book._id}`}>{book.title}</Link></td>
                      <td>{book.author}</td>
                      <td>{book.description}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
          );
  }
}

export default App;