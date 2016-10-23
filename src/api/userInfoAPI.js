import { fetchJson } from '../utils/fetchUtil';

const userInfoAPI = {
  fetchUserInfo() {
    return fetchJson(
      'http://localhost/Api/WhoAmI',
      (data) => data,
      { credentials: 'include' }
      );
  },
};

export default userInfoAPI;
