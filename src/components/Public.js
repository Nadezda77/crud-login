import React, { Component } from 'react';
import {Button, Grid, Image, Row, Col, Jumbotron, Panel} from "react-bootstrap";
import bgImage from '../img/books.jpg';
import Menu from "./Menu";



class Public extends Component {
render() {
    return (
            <div>   
                <Menu/>
                <Jumbotron style={styles.container}>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button bsStyle="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <Row>
                  
                </Row>
            </div>
            )
    }
}


const styles = {
    container: {
        backgroundImage: `url(${bgImage})`,
        color: "white"
    }
};


export default Public;

