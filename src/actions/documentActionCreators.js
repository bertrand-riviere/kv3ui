import { DOCUMENTS_REQUEST, DOCUMENTS_RECEIVE, DOCUMENTS_FAILURE } from '../constant';
import documentAPI from '../api/documentAPI';

const documentActionCreators = {
  fetchDocuments() {
    return (dispatch) => {
      dispatch({ type: DOCUMENTS_REQUEST });

      documentAPI.fetchDocuments.then(
        (documents) => dispatch({ type: DOCUMENTS_RECEIVE, documents }),
        (error) => dispatch({ type: DOCUMENTS_FAILURE, error })
      );
    };
  },
};

export default documentActionCreators;
