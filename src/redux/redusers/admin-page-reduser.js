
const initialState = {
  tableFilms: {
    thFilmsData: [
      { th: 'Id', scope: 'col' },
      { th: 'Title', scope: 'col' },
      { th: 'Picture', scope: 'col' },
      { th: 'Description', scope: 'col' },
      { th: 'Ticket price', scope: 'col' },
      { th: 'Start date', scope: 'col' },
      { th: 'End date', scope: 'col' },
      { th: 'Tags', scope: 'col' },
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
