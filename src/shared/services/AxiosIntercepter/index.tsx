import {HTTP_CLIENT, showToast} from '@utils';
export const AxiosIntercepter = async (
  url: any,
  method: string,
  body: any,
  // isTimeout = false,
  // isFormData = false,
) => {
  if (method == 'post') {
    return HTTP_CLIENT.post(url, body)
      .then((data: any) => {
        // console.log('wrapper ddd....', data);
        return data;
      })
      .catch(err => {
        console.log('wrapper error', err.response.data);

        if (err?.response?.data) {
          {
            if (err?.response?.status == 401) {
              // store.dispatch(signOut());
            }

            return err;
          }
        } else {
          showToast('Oops!', 'Something went wrong', false);
        }
      });
  } else if (method == 'get') {
    return HTTP_CLIENT.get(url)
      .then((data: any) => {
        console.log('--getAPI failed-', JSON.stringify(data?.data, null, 2));

        return data;
      })
      .catch(err => {
        console.log('Wrapper get error.....', err);

        if (err?.response?.status == 401) {
          // store.dispatch(signOut());
        }
        return err.response;
      });
  }
};
