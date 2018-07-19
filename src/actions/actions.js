export const REMOVE_FILM = "REMOVE_FILM"
export const ADD_FILM = "ADD_FILM"
export const DELETE_FILM = "DELETE_FILM"
export const CREATE_FILM = "CREATE_FILM"

export const makeRemoveFilmAction = filmId => ({
  type: REMOVE_FILM,
  filmId
});

export const makeDeleteFilmAction = filmId => ({
  type: DELETE_FILM,
  filmId
})

export const makeAddFilmAction = film => ({
  type: ADD_FILM,
  film
});

export const makeCreateFilmAction = articleCreate => ({
  type: CREATE_FILM,
  articleCreate
});