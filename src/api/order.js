import request from '.';

export const getListOrderApi = (headers) => request.get('/orders', headers);

export const getOrderByIdApi = (headers,id) => request.get('/orders/${id}',headers);