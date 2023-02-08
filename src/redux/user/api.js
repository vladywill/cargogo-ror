import axios from 'axios';
import baseUrl from '../baseUrl';

export const postUser = async (user) => (
  axios.post(`${baseUrl}users`, user)).then((response) => localStorage.setItem('userInfo', JSON.stringify(response.data.data)));

export const getUser = async (userlogin) => (
  axios.post(`${baseUrl}users/login`, userlogin)).then((response) => localStorage.setItem('userInfo', JSON.stringify(response.data.data)));