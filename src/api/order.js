import request from '.';

export const getListOrderApi = (headers) => request.get('/orders', headers);

export const getOrderByIdApi = (id,headers) => request.get(`/orders/${id}`,headers);