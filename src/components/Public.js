import React, { Component } from 'react';
import Menu from "./Menu";



class Public extends Component {
render() {
    return (
        <div>
            <Menu/>
            <br/>
            <div className="container">
                <h1>Online shop</h1>

                <br/>

                <p>
                Public

                </p>
            </div>
        </div>
        );
    }
}

export default Public;