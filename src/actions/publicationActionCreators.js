import { PUBLICATIONS_REQUEST, PUBLICATIONS_RECEIVE, PUBLICATIONS_FAILURE } from '../constants';
import publicationAPI from '../api/publicationAPI';

const publicationActionCreators = {
  fetchPublications() {
    return (dispatch) => {
      dispatch({ type: PUBLICATIONS_REQUEST });
      return publicationAPI.fetchPublications().then(
        (publications) => {
          dispatch({ type: PUBLICATIONS_RECEIVE, publications });
        },
        (error) => dispatch({ type: PUBLICATIONS_FAILURE, error })
      );
    };
  },
};

export default publicationActionCreators;
