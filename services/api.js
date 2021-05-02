import axios from 'axios';
import { POSTS_PER_PAGE } from '../config/constants';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export async function getPosts(page = 1, limit = POSTS_PER_PAGE) {
  const offset = (page - 1) * limit;

  return await api
    .get('posts/', {
      params: {
        limit,
        offset,
      },
    })
    .then((res) => res.data);
}

export default api;
