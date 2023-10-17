import {BASE_URL, BASE_URL_TRANSACTION} from '@env';
import {ENDPOINTS} from '@utils';
import {FetchIntercepter} from '@services';

export const saleOrder = async (params: any) => {
  let url = BASE_URL_TRANSACTION + ENDPOINTS.SALE_ORDER;
  let res = await FetchIntercepter(url, 'POST', true, params, false);
  return res;
};
export const ParseEMV = async (params: any) => {
  let url = BASE_URL_TRANSACTION + ENDPOINTS.PARSE_EMV;
  let res = await FetchIntercepter(url, 'POST', true, params, true);
  return res;
};

export const setPasscode = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.SET_PASSCODE;
  let res = await FetchIntercepter(url, 'POST', true, params, true);
  return res;
};

export const verifyClerkId = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.VERIFY_PASSCODE;

  let res = await FetchIntercepter(url, 'POST', true, params, true);
  return res;
};

export const verifyPosAdmin = async (params: any) => {
  let url = BASE_URL + 'POS/auth/verify-pos-admin/' + params._id;

  delete params._id;
  let res = await FetchIntercepter(url, 'PUT', true, params);
  return res;
};

export const getPerms = async (params: any) => {
  let url = BASE_URL + 'POS/auth/perms';
  let res = await FetchIntercepter(url, 'GET', true);
  return res;
};

export const resendOtpApi = async (params: any) => {
  let url = BASE_URL + 'POS/auth/resend-email/' + params;
  let res = await FetchIntercepter(url, 'POST', true);
  return res;
};

export const getReceiptData = async (id: any) => {
  let url = BASE_URL + id;
  let res = await FetchIntercepter(url, 'GET', true);
  return res;
};

export const getConfigurations = async () => {
  let url = BASE_URL;
  let res = await FetchIntercepter(url, 'GET', true);
  return res;
};

export const updateConfigurations = async (params: any) => {
  let url = BASE_URL;

  let res = await FetchIntercepter(url, 'POST', true, params, true);
  return res;
};
