import request from '.';

export const loginApi = (params) => request.post('/staff/log-in', params);

export const getMeApi = (headers) => request.get('/staff/me', headers);

export const updateStaffApi= (params,headers) => request.put('/staff/update',params,headers);

export const getSalaryApi =(month,headers) => request.get(`/salary/me?month=${month}`,headers);