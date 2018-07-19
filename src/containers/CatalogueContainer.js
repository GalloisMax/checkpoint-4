import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container } from "reactstrap";
import ListCatalogue from "../components/ListCatalogue";
import { makeAddFilmAction, makeDeleteFilmAction } from "../actions/actions";


//map the prop articles to the panier branch of state
const mapStateToProps = state => ({
  films: state.catalogue
});

const mapDispatchToProps = dispatch => ({
  addArticle: articleId => dispatch(makeAddFilmAction(articleId)),
  deleteFilm: filmId => dispatch(makeDeleteFilmAction(filmId))
});

class Catalogue extends Component {
  render() {
    return (
      <Container>
       
        <ListCatalogue
          catalogueFilms={this.props.films}
          add={this.props.addArticle}
          delete={this.props.deleteFilm}
        />
        
        
      </Container>
      
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogue);
