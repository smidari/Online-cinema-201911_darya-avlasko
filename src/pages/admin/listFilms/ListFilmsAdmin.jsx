import React from 'react';
import PropTypes from 'prop-types';
import TableFilmsAdmin from './table/TableFilmsAdmin';
import MyModal from '../../../components/modal/MyModal';
import FormForModalBodyAddFilm from './FormForModalBodyAddFilm';


const ListFilmsAdmin = (props) => (
          <div>
            <MyModal
              className='modal-add-film'
              nameBtnOpenModal='Add film'
              size='lg'
              modaltitle='Add film'
              stateModal={props.stateModal}
              bodyModal={FormForModalBodyAddFilm}
              nameBtnConfirmation='Add film'
              confirmationFunc={props.addFilm}
            />
            <TableFilmsAdmin
              thdata={props.thdata}
              trdata={props.trdata}
              deleteFilm={props.deleteFilm}
            />
          </div>
);

ListFilmsAdmin.propTypes = {
  addFilm: PropTypes.func,
  deleteFilm: PropTypes.func,
  nameModalBtn: PropTypes.string,
  modaltitle: PropTypes.string,
  trdata: PropTypes.array,
  thdata: PropTypes.array,
};

export default ListFilmsAdmin;
