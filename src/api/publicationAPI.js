import 'whatwg-fetch';

const publicationAPI = {
  fetchPublications() {
    return fetch('fake-publication.json')
    .then((response) => response.json());
  },
};

export default publicationAPI;
