import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container } from "reactstrap";
import ListFilm from "../components/ListFilm";
import { makeRemoveFilmAction } from "../actions/actions";

const mapStateToProps = state => ({
  films: state.panier
});

const mapDispatchToProps = dispatch => ({
  removeArticle: articleId => dispatch(makeRemoveFilmAction(articleId))
});

class Panier extends Component {
  render() {
    return (
      <Container>
         
        <ListFilm
          films={this.props.films}
          remove={this.props.removeArticle}
        />
       
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panier);
