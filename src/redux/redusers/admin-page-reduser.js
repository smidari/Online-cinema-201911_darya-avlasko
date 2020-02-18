
const initialState = {
  tableFilms: {
    thFilmsData: [
      { "#": "",
        "Title": "",
        "Picture": "",
        "Description": "",
        "Ticket price": "",
        "Start date": "",
        "End date": "",
        "Tags": []}
    ],
  },
  modalAddFilm: {
    stateModal: {
      value: '',
      title: '',
      description: '',
      price: '',
      start: '',
      end: '',
      tags: '',
      remove: 'remove',
    },
  },
};


const adminPageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default adminPageReducer;
