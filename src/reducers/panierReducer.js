import { REMOVE_FILM, ADD_FILM } from "../actions/actions";

const initialState = [];

// initialState is the default value of prevState
const panierReducer = (prevState = initialState, action) => {
  if (action.type === REMOVE_FILM) {
    return prevState.filter(film => action.filmId !== film.id);
  }
  if (action.type === ADD_FILM) {
    return [...prevState, action.film];
  }
  return prevState;
};

export default panierReducer;
