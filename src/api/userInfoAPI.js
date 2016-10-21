import 'whatwg-fetch';

const userInfoAPI = {
  fetchUserInfo() {
    return fetch('http://localhost/Api/WhoAmI', { credentials: 'include' })
    .then((response) => response.json());
  },
};

export default userInfoAPI;
