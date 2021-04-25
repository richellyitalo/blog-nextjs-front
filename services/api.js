import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/'
})

export async function getPosts() {
  return await api.get('posts/');
}

export default api;