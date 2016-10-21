import 'whatwg-fetch';

const publicationAPI = {
  fetchPublications() {
    return fetch('http://localhost/Api/Search', { credentials: 'include' })
    .then((response) => response.json());
  },
};

export default publicationAPI;
