import React from "react";
// import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";

import Film from "./Film";

const ListFilm = ({ films, remove }) => (
  <ListGroup>
    {films.map(film => (
      <Film
        key={film.id}
        {...film}
        remove={() => remove(film.id)}
      />
    ))}
  </ListGroup>
  
);


// ListArticle.propTypes = {
//   articles: PropTypes.array.isRequired,
//   remove: PropTypes.func.isRequired
// };

export default ListFilm;
