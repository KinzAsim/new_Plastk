import axios, {AxiosInstance} from 'axios';
import {store} from '@redux';
import {BASE_URL} from '@env';

export const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const initialConfig = (dispatch: any) => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const {user} = store.getState().root;
      if (user && user?.authToken && config.headers) {
        config.headers.Authorization = `Bearer ${user?.authToken}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );
};

export const MAP_URL = {
  GOOGLE_MAP_KEY: 'AIzaSyBhcA7J8ZefAwlzhuYUNDIf_W3Yzy_16gA',
  PLACE_DETAIL_URL: 'https://maps.googleapis.com/maps/api/place/details/json',
  GET_DETAIL:
    'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=',
  GET_COUNTRY_CTY_DETAIL:
    'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
};
// Add this App.tsx in useEffect
// useEffect(() => {
//   initialConfig(store.dispatch);
// }, []);
