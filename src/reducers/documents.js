import { DOCUMENTS_RECEIVE } from '../constants';

const documents = (state = [], action) => {
  switch (action.type) {
    case DOCUMENTS_RECEIVE:
      return action.documents;
    default:
      return state;
  }
};

export default documents;
