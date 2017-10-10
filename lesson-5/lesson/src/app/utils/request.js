import qs from 'query-string';
import { Message } from 'react-impression';

const _request = (url, options = {}) => {
  const { method = 'GET', loading = true, headers = {}, ...others } = options;

  loading && Message.loading('正在加载数据...');

  return fetch(url, {
    method,
    headers,
    credentials: 'include',
    ...others,
  }).then(response => {
    loading && Message.hideMessage();

    if(response.status === 200) {
      return response.json();
    }

    Message.error(response.error || '服务器出差了');

    return Promise.reject(response);
  });
};

const post = (url, data, { headers = {}, json = false, ...options } = {}) => {
  return _request(url, {
    method: 'POST',
    headers: {
      ...headers,
      'content-type': json
        ? 'application/json'
        : 'application/x-www-form-urlencoded',
    },
    body: json ? JSON.stringify(data) : qs.stringify(data),
    ...options,
  });
};

const get = (url, params, { headers = {}, ...options } = {}) => {
  const _url = params ? `${url}?${qs.stringify(params)}` : url;

  return _request(_url, {
    method: 'GET',
    headers,
    ...options,
  });
};

export {
  post,
  get
};
