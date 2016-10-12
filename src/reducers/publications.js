import { PUBLICATIONS_RECEIVE } from '../constants';

const initialState = [];

const publications = (state = initialState,
	// temp
	// [
	//	{ id: 1, title: 'Pub1' },
	//	{ id: 2, title: 'Pub2' },
	// ],
	action) => {
  switch (action.type) {
    case PUBLICATIONS_RECEIVE:
      return action.publications;
    default:
      return state;
  }
};

export default publications;
