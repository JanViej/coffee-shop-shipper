import request from '.';

export const getCategoryApi = () => request.get('/category');

export const getDrinkApi = payload =>
  request.get('/drink', {
    params: payload,
  });
