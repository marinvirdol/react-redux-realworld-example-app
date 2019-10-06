import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.body;

let token = null;
let tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`)
  }
}

const requests = {
  get: url => {
    return superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody)
  },
  post: (url, body) => {
    return superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
  }
};

const Articles = {
  all: page => {
    return requests.get('/articles?limit=10')
  }
};

const Auth = {
  current: () => {
    return requests.get('/user');
  },
  login: (email, password) => {
    return requests.post('/users/login', {user: {email, password}});
  }
};

export default {
  Articles,
  Auth,
  setToken: _token => {token = _token;}
}
