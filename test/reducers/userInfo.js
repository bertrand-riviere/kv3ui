import expect from 'expect';
import reducer from '../../src/reducers/userInfo';
import * as types from '../../src/constants';

const initialState = {
  userInfo: {
    DisplayName: 'Guest',
  },
  errorMessage: '',
  isFetching: false,
};

const loadedState = {
  userInfo: {
    DisplayName: 'User Name',
  },
  errorMessage: '',
  isFetching: false,
};

describe('userInfo reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, { })
    ).toEqual(
      initialState
    );
  });

  it('should handle USERINFO_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: types.USERINFO_REQUEST,
      })
    ).toEqual(
      {
        userInfo: {
          DisplayName: 'Guest',
        },
        errorMessage: '',
        isFetching: true,
      }
    );
  });

  it('should handle USERINFO_RECEIVE', () => {
    expect(
      reducer(initialState, {
        type: types.USERINFO_RECEIVE,
        userInfo: { DisplayName: 'User Name' },
      })
    ).toEqual(
      loadedState
    );
  });

  it('should handle USERINFO_FAILURE', () => {
    expect(
      reducer(loadedState, {
        type: types.USERINFO_FAILURE,
        error: 'Error message',
      })
    ).toEqual(
      {
        userInfo: { DisplayName: 'Guest' },
        errorMessage: 'Error message',
        isFetching: false,
      }
    );
  });
});
