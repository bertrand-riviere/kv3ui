import 'whatwg-fetch';

const documentAPI = {
  fetchDocuments() {
    return fetch('document.json')
    .then((response) => response.json());
  },
};

export default documentAPI;
