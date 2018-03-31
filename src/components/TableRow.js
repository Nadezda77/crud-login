import React, {Component} from "react";
import {Link} from 'react-router-dom';
import ItemService from './ItemService';
import Menu from "./Menu";

class TableRow extends Component {


    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.addItemService.deleteData(this.props.obj._id);
    }
    render() {
      return (
          <div className="container">
          <Menu/>
          <br/>
          <tr>
            <td>
              {this.props.obj._id}
              <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
              {this.props.obj.item}
            </td>
            <td>
              <button className="btn btn-primary">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          </div>
          
      );
    }
  }
  
  export default TableRow;