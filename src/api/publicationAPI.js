import { fetchJson } from '../utils/fetchUtil';

const publicationAPI = {
  fetchPublications() {
    return fetchJson(
      'http://localhost/Api/Search',
      (data) => data.results,
      { credentials: 'include' }
      );
  },
};

export default publicationAPI;
