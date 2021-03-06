import React from "react";
import { Button, Col, ListGroupItem, Row } from "reactstrap";

const Film = ({ imgSrc, name, price, remove, }) => (
  <ListGroupItem>
    <Row>
      <Col xs={3}>
        <Button onClick={remove}>Supp</Button>
      </Col>
      <Col xs={3}>
        <img className="img-fluid" alt={name} src={imgSrc} />
      </Col>
      <Col xs={3}>
        <h3>{name}</h3>
      
        <Button onClick={remove}>Supp</Button>
        <p>{price} €</p>
      </Col>
    </Row>
  </ListGroupItem>
);

export default Film;
