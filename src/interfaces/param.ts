export interface ParamBooking {
  page?: number | string;
  limit?: number | string;
  status_booking?: 'PENDING' | 'CANCEL' | 'SUCCESS';
  includes?: string;
}