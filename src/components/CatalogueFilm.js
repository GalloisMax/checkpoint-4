import React from "react";
// import PropTypes from "prop-types";
import { Button, Col, ListGroupItem, Row } from "reactstrap";

const CatalogueFilm = ({ imgSrc, name, price, add }) => (
  <ListGroupItem>
    <Row>
      <Col xs={3}>
        
      </Col>
      <Col xs={3}>
        <img className="img-fluid" alt={name} src={imgSrc} />
      </Col>
      <Col xs={3}>
        <h3>{name}</h3>
      
        <p>{price} €</p>
        
        <Button onClick={add}>Buy</Button>
      </Col>
    </Row>
  </ListGroupItem>
);

// CatalogueArticle.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   add: PropTypes.func.isRequired
// };

export default CatalogueFilm;
