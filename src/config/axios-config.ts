import axios from "axios";
import queryString from "query-string";
import Cookies from "js-cookie";

// export const baseURL = process.env.NEXT_PUBLIC_API_URL_DEV;
export const baseURL = process.env.NEXT_PUBLIC_API_URL
export const captKey = process.env.NEXT_PUBLIC_KEY_CAPTCHA ?? ''
export const apiBlog = process.env.NEXT_PUBLIC_API_BLOG
export const axiosConfig = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json"
  },
  paramsSerializer: {
    encode: (param: string) => { },
    serialize: (params) => queryString.stringify(params),
    indexes: false,
  },
});
axiosConfig.interceptors.request.use(async (config) => {
  const { refresh, token } = validRefreshToken()
  config.headers.Authorization = `Bearer ${token}`
  if (refresh) {
    try {
      const res = await axios.post(
        `${baseURL}customers/auth/refresh_token`,
        {},
        { withCredentials: true }
      )
      const data = res.data
      Cookies.set('token_expired_at', data.data.token_expired_at,{secure:true})
      Cookies.set('access_token', data.data.token,{secure:true})
      config.headers.Authorization = `Bearer ${data.data.token}`
    } catch (error) { }
  }
  return config;
});
axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);
const validRefreshToken = () => {
  let refresh = false
  const dateString = Cookies.get('token_expired_at')
  const token = Cookies.get('access_token')
  if (dateString) {
    const date = new Date()
    const dateObject = new Date(dateString);
    const milliseconds = dateObject.getTime();
    const timeCur = date.getTime()
    if ((timeCur > milliseconds)) {
      refresh = true
    }
  }
  return { refresh, token }
}
