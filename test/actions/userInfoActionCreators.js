import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userInfoActionCreators from '../../src/actions/userInfoActionCreators';
import * as types from '../../src/constants';
import fetch from 'isomorphic-fetch';
import nock from 'nock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user info actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates USERINFO_RECEIVE when fetching user info has been done', () => {
    nock('http://localhost/Api/WhoAmI')
      .get('')
      .reply(200, { DisplayName: 'A name to display' });

    const expectedActions = [
      { type: types.USERINFO_REQUEST },
      { type: types.USERINFO_RECEIVE, userInfo: { DisplayName: 'A name to display' } },
    ];

    const store = mockStore({ userInfo: { } });

    return store.dispatch(userInfoActionCreators.fetchUserInfo())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates USERINFO_FAILURE when fetch is not authorized', () => {
    nock('http://localhost/Api/WhoAmI')
      .get('')
      .replyWithError({ });

    const store = mockStore({ userInfo: { } });

    return store.dispatch(userInfoActionCreators.fetchUserInfo())
      .then(() => {
        expect(store.getActions()).toInclude({ type: types.USERINFO_REQUEST });
        expect(store.getActions()).toInclude({ type: types.USERINFO_FAILURE }, (t) =>
          t.type === types.USERINFO_FAILURE
        );
      });
  });
});
