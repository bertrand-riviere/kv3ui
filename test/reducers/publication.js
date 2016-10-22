import expect from 'expect';
import reducer from '../../src/reducers/publication';
import * as types from '../../src/constants';

const initialState = {
  publications: [],
  errorMessage: '',
  isFetching: false,
};

const loadedState = {
  publications: [{ id: '1', title: 'Pub 1' }],
  errorMessage: '',
  isFetching: false,
};

describe('publication reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, { })
    ).toEqual(
      initialState
    );
  });

  it('should handle PUBLICATIONS_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: types.PUBLICATIONS_REQUEST,
      })
    ).toEqual(
      {
        publications: [],
        errorMessage: '',
        isFetching: true,
      }
    );
  });

  it('should handle PUBLICATIONS_RECEIVE', () => {
    expect(
      reducer(initialState, {
        type: types.PUBLICATIONS_RECEIVE,
        publications: [{ id: '1', title: 'Pub 1' }],
      })
    ).toEqual(
      loadedState
    );
  });

  it('should handle PUBLICATIONS_FAILURE', () => {
    expect(
      reducer(loadedState, {
        type: types.PUBLICATIONS_FAILURE,
        error: 'Error message',
      })
    ).toEqual(
      {
        publications: [],
        errorMessage: 'Error message',
        isFetching: false,
      }
    );
  });
});
