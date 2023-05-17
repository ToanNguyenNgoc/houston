import { axiosConfig } from "@/config";
import {
  Banner,
  Booking,
  Branch,
  ParamBooking,
  ParamVilla,
  ParamVillaCate,
  ReqBooking,
  ReqForgot,
  ReqLogin,
  ReqProfile,
  ReqRegister,
  ResponseDetail,
  ResponseList, Villa, VillaCate
} from "@/interfaces";

export const api = {
  login: (body: ReqLogin) => {
    return axiosConfig.post('customers/auth/login', body).then(res => res.data)
  },
  logout: () => {
    return axiosConfig.post('customers/auth/logout').then(res => res.data)
  },
  forgot: (body: ReqForgot) => {
    return axiosConfig.post('customers/auth/forgot', body).then(res => res.data)
  },
  profile: () => {
    return axiosConfig.get('customers/auth/profile').then(res => res.data)
  },
  putProfile: (body: ReqProfile) => {
    return axiosConfig.put('customers/auth/profile', body).then(res => res.data)
  },
  refreshToken: (refresh_token: string) => {
    return axiosConfig.post('customers/auth/refresh_token', { refresh_token: refresh_token })
      .then(res => res.data)
  },
  register: (body: ReqRegister) => {
    return axiosConfig.post('customers/auth/register', body).then(res => res.data)
  },
  bookings: (params: ParamBooking) => {
    return axiosConfig.get('bookings_customer', { params }).then<ResponseList<Booking[]>>(res => res.data)
  },
  booking: (body: ReqBooking) => {
    return axiosConfig.post('bookings_customer', body).then(res => res.data)
  },
  villa_galleries: (villa_id: number | string) => {
    return axiosConfig.get('villa_galleries', { params: { villa_id: villa_id } })
      .then(res => res.data)
  },
  uploadMedia: (file: FormData) => {
    return axiosConfig
      .post('media', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => res.data)
  },
  banners: () => {
    return axiosConfig.get('banners').then<ResponseList<Banner[]>>(res => res.data)
  },
  branchById: (id: number | string) => {
    return axiosConfig.get(`branches/${id}`).then<ResponseDetail<Branch>>(res => res.data)
  },
  villaCates: (params: ParamVillaCate) => {
    return axiosConfig.get(`villa_cates`, { params }).then<ResponseList<VillaCate[]>>(res => res.data)
  },
  villas: (params: ParamVilla) => {
    return axiosConfig.get('villas', { params }).then<ResponseList<Villa[]>>(res => res.data)
  }
}