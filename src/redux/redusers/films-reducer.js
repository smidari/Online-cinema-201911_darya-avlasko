const SET_FILMS = 'SET_FILMS';

const initialState = {
  films: [],
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS: {
      return { ...state, films: [...action.payload] };
    }

    default:
      return state;
  }
};

export const setFilms = (films) => ({
  type: SET_FILMS,
  payload: films,
});

export const getFilms = () => (dispatch) => {
  fetch('http://localhost:3000/server/sda.json')
    .then((response) => response.json())
    .then((data) => dispatch(setFilms(data.films)));
};


export default filmsReducer;
