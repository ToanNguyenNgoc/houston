export interface Branch {
  id: number,
  name: string,
  content:string;
  description: string,
  status: boolean,
  deleted: boolean,
  created_at: string,
  updated_at: string,
  address: string,
  latitude: string,
  longitude: string,
  image?: {
    original_url: string
  },
  ward?: {
    code: number,
    name: string,
    division_type: string,
    codename: string,
    district_code: number
  },
  district?: {
    code: number,
    name: string,
    division_type: string,
    codename: string,
    province_code: number
  },
  province?: {
    code: number,
    name: string,
    division_type: string,
    codename: string,
    phone_code: number
  }
}