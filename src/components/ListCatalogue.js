import React from "react";
// import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import  Info  from "./Info"

import CatalogueFilm from "./CatalogueFilm";

const ListCatalogue = ({ catalogueFilms, add}) =>  (
    <div>
  <ListGroup>
    {catalogueFilms.map(film => (
      <CatalogueFilm
        key={film.id}
        {...film}
        add={() => add(film)}
        key={film.id}
        {...film}
        delete={() => delete(film.id)}
      />
    ))}
  </ListGroup>
  <Info />
  </div>

)


// ListCatalogue.propTypes = {
//   catalogueArticles: PropTypes.array.isRequired,
//   add: PropTypes.func.isRequired
// };

export default ListCatalogue;
