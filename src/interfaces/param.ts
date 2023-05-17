export interface ParamPage {
  page?: number | string;
  limit?: number | string;
}
export interface ParamBooking extends ParamPage {
  status_booking?: 'PENDING' | 'CANCEL' | 'SUCCESS';
  includes?: string;
}
export interface ParamVillaCate extends ParamPage {
  search?: string;
  branch_id?: number | string;
  status?: boolean
}
export interface ParamVilla extends ParamPage {
  branch_id?: number | string;
  villa_cate_id?: number | string;
  search?: string;
  status?: boolean;
  min_price?: number;
  max_price?: number;
  sort_price?: '-price' | 'price';
  includes?: 'full_address'
}