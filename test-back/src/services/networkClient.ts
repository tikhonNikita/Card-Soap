import axios from 'axios';

axios.defaults.baseURL = 'http://www.learnwebservices.com/services/';
axios.defaults.headers = {
  'Content-Type': 'text/xml'
};

export const networkClient = {
  post: (url: string, body: string) => axios.post(url, body),
};
