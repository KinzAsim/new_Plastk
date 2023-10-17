import {API_URL, BASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store, toggleLoader} from '@redux';
import axios from 'axios';
import {MAP_URL} from '@utils';

export const POSTAPI = async (endPoint: any, data: any, formData = '') => {
  store.dispatch(toggleLoader(true));
  let header;
  if (formData != '') {
    header = {
      'Content-Type': 'multipart/form-data',
    };
  } else {
    header = {
      'Content-Type': 'application/json',
    };
  }
  return axios
    .post(BASE_URL + endPoint, data, {
      headers: header,
    })
    .then(res => {
      store.dispatch(toggleLoader(false));
      return res;
    })
    .catch(error => {
      store.dispatch(toggleLoader(false));
      return error;
    });
};

export const GETAPI = async (endPoint: any) => {
  const res = axios.get(BASE_URL + endPoint, {
    headers: {
      // Authorization: "Bearer " + "Token",
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const UPDATEAPI = async (endPoint: any, data: any) => {
  store.dispatch(toggleLoader(true));
  const res = await axios.patch(BASE_URL + endPoint, data, {
    headers: {
      // Authorization: "Bearer " + "Token",
      'Content-Type': 'application/json',
    },
  });
  store.dispatch(toggleLoader(false));
  return res;
};

export const DELETEAPI = async (endPoint: any) => {
  const token: any = await AsyncStorage.getItem('TOKEN');
  const getResponse = await axios.delete(`${API_URL}${endPoint}`, {
    headers: {Authorization: JSON.parse(token)},
  });
  return getResponse;
};

export const searchLocation = async (text: any) => {
  const response = axios.request({
    method: 'post',
    url: `${MAP_URL.GET_DETAIL}${MAP_URL.GOOGLE_MAP_KEY}&components=country:ca&input=${text}`,
  });
  return response;
};

export const onPlaceSelected = async (placeId: any) => {
  return await fetch(
    `${MAP_URL.PLACE_DETAIL_URL}?key=${MAP_URL.GOOGLE_MAP_KEY}&placeid=${placeId}`,
  )
    .then(response => response.json())
    .then(resdata => {
      getLocationDetail(resdata);
      return resdata;
    })
    .catch(error => {
      console.log('error', error);
    });
};

export const getLocationDetail = async (data: any) => {
  return await axios
    .get(
      `${MAP_URL.GET_COUNTRY_CTY_DETAIL}` +
        data.result.geometry.location.lat +
        ',' +
        data.result.geometry.location.lng +
        `&key=${MAP_URL.GOOGLE_MAP_KEY}&sensor=false`,
    )
    .then(res => {
      return res;
    })

    .catch(error => {
      console.log('error', error);
    });
};
