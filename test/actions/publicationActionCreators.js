import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import publicationActionCreators from '../../src/actions/publicationActionCreators';
import * as types from '../../src/constants';
import fetch from 'isomorphic-fetch';
import nock from 'nock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('publication actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates PUBLICATIONS_RECEIVE when fetching publications has been done', () => {
    nock('http://localhost/Api/Search')
      .get('')
      .reply(200, { results: [{ id: '1', title: 'pub 1' }] });

    const expectedActions = [
      { type: types.PUBLICATIONS_REQUEST },
      { type: types.PUBLICATIONS_RECEIVE, publications: [{ id: '1', title: 'pub 1' }] },
    ];

    const store = mockStore({ publications: [] });

    return store.dispatch(publicationActionCreators.fetchPublications())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates PUBLICATIONS_FAILURE when fetch is not authorized', () => {
    nock('http://localhost/Api/Search')
      .get('')
      .replyWithError({ });

    const store = mockStore({ publications: [] });

    return store.dispatch(publicationActionCreators.fetchPublications())
      .then(() => {
        expect(store.getActions()).toInclude({ type: types.PUBLICATIONS_REQUEST });
        expect(store.getActions()).toInclude({ type: types.PUBLICATIONS_FAILURE }, (t) =>
          t.type === types.PUBLICATIONS_FAILURE
        );
      });
  });
});
