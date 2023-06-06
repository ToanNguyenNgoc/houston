export interface ReqLogin {
  email: string;
  password: string
}
export interface ReqProfile {
  fullname?: string,
  telephone?: string,
  sex?: boolean,
  full_address?: string,
  dob?: string,
  ccid?: string,
  job?: string,
  media_id?: number,
  country?: string
}
export interface ReqForgot {
  email: string;
  recaptcha: string;
  new_password?: string;
  code?: string;
}
export interface ReqRegister {
  email: string,
  password?: string,
  fullname?: string,
  telephone?: string,
  full_address?: string,
  dob?: string,
  country?: string,
  code?: string
}
export interface ReqBooking {
  branch_id: number | string;
  villa_id: number | string;
  from_date_booking: string;
  to_date_booking: string;
  customer_count: number | string;
  baby_count: number | string;
  note?: string;
  payment_method:'CASH'|'VNPAY';
  payment_method_bank:string|null;
  recaptcha: string;
}