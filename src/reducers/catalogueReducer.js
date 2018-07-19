import { DELETE_FILM} from "../actions/actions"

const initialState = [
  {
    id: 1,
    name: "Valse avec Bachir",
    price: 45,
    imgSrc:
      "http://images.fan-de-cinema.com/affiches/large/85/52283.jpg"
  },
  {
    id: 2,
    name: "Taxi Driver",
    price: 45,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjnNZBDCR5pwSb_7PNzU1gfDBBCbEVVt0n14GoCWEo_gs1Nej4Q"
  },
  {
    id: 3,
    name: "Apocalypto",
    price: 45,
    imgSrc:
      "https://disney-planet.fr/wp-content/uploads/2014/10/affiche-apocalypto.jpg"
  },
  {
    id: 4,
    name: "Whiplash",
    price: 45,
    imgSrc:
      "http://fr.web.img2.acsta.net/pictures/14/09/26/17/53/345974.jpg"
  }
];

// initialState is the default value of prevState
const catalogueReducer = (prevState = initialState, action) => prevState;

if(action.type === DELETE_FILM) {
  return prevState.filter(film => action.filmDelete !==film.id);
}
return prevState


export default catalogueReducer;
