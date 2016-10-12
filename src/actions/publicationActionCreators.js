import { PUBLICATIONS_REQUEST, PUBLICATIONS_RECEIVE, PUBLICATIONS_FAILURE } from '../constants';
import publicationAPI from '../api/publicationAPI';

const publicationActionCreators = {
  fetchPublications() {
    return (dispatch) => {
      dispatch({ type: PUBLICATIONS_REQUEST });

      publicationAPI.fetchPublications().then(
        // Add 2 second delay to simulate long api call
        // so that the loading logic can be seen on screen
        (publications) => setTimeout(() => {
          dispatch({ type: PUBLICATIONS_RECEIVE, publications });
        }, 2000),
        // (publications) => dispatch({ type: PUBLICATIONS_RECEIVE, publications }),

        (error) => dispatch({ type: PUBLICATIONS_FAILURE, error })
      );
    };
  },
};

export default publicationActionCreators;
