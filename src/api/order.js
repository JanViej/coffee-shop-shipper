import request from '.';

export const getListOrderApi = (param,headers) => request.get(`/orders?status=${param}`, headers);

export const getOrderByIdApi = (id,headers) => request.get(`/orders/${id}`,headers);

export const updateStatusApi=(id,params,headers) =>request.put(`/orders/${id}/status`,params,headers);

export const getListOrderSuccessApi=(headers) => request.get('orders?status=success',headers);

export const getListOrderDeliveryApi=(headers) => request.get('orders?status=delivery',headers);