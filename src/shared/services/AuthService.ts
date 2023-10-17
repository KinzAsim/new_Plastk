import {ENDPOINTS} from '@utils';
import {BASE_URL} from '@env';
import {FetchIntercepter} from './FetchIntercepter';

export const signin = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.LOGIN;
  params.isMobile = true;
  let res = await FetchIntercepter(url, 'POST', false, params, true);
  return res;
};

export const signup = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.REGISTER;
  let res = await FetchIntercepter(url, 'POST', false, params);
  return res;
};

export const verifyManagerPassword = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.VERIFY_MANAGER_PASSWORD;
  let res = await FetchIntercepter(url, 'POST', true, params, true);
  return res;
};
