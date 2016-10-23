import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJson(response) {
  return response.json();
}

export function fetchJson(url, parsingFunc, options = { }) {
  return fetch(url, options)
  .then(checkStatus)
  .then(parseJson)
  .then(parsingFunc)
  .catch((error) => {
    throw error;
  });
}
