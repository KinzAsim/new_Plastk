import {ENDPOINTS, HTTP_CLIENT} from '@utils';

export const login = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const register = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.REGISTER, params);
};
