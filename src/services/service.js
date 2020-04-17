import axios from 'axios';

export const baseService = {
    get,
    post,
    _delete
}

function validCodes(code) {
    if (code >= 200 && code < 400) {
      return true;
    }
    return false;
  };

function handleResponse(response) {
    if (!validCodes(response.status)) {
        return Promise.reject(response);
    }
    return response;
}

function handleError(error) {
    return error
}

function get(url, header) {
    return axios.get(url, header)
        .then(handleResponse)
        .catch(handleError)
}

function post(url, body, header) {
    console.log('test')
    return axios
        .post(url, body, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json'
            }
        })
        .then(handleResponse)
        .catch(handleError);
}

function _delete(url, header, params) {
    return axios
        .delete(url, { headers: { Authorization: header.Authorization } })
        .then(handleResponse)
        .catch(handleError);
}