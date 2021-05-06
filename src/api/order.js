import request from '.';

export const getListOrderApi = (headers) => request.get('/orders', headers);