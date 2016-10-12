import { PUBLICATIONS_REQUEST, PUBLICATIONS_RECEIVE, PUBLICATIONS_FAILURE } from '../constants';

const initialState = {
  publications: [],
  errorMessage: '',
  isFetching: false,
};

const publication = (state = initialState, action) => {
  switch (action.type) {
    case PUBLICATIONS_REQUEST:
      return { ...state, publications: [], isFetching: true };
    case PUBLICATIONS_RECEIVE:
      return { ...state, publications: action.publications, isFetching: false };
    case PUBLICATIONS_FAILURE:
      return {
        ...state,
        publications: [],
        isFetching: false,
        errorMessage: 'Error occured (details: ${action.error.toString()})',
      };
    default:
      return state;
  }
};

export default publication;
