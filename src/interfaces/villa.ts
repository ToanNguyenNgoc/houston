import { Branch } from "@/interfaces/branch"

export interface Villa {
  id: number,
  name: string,
  description: string,
  price: number,
  special_price: number,
  holiday_price: number,
  weekend_price: number,
  status: boolean,
  deleted: boolean,
  created_at: string,
  updated_at: string,
  acreage: number,
  thumbnail?: {
    original_url: string
  },
  villa_cate?: {
    id: number,
    villa_cate_name: string,
    description: string,
    status: boolean,
    deleted: boolean,
    created_at: string,
    updated_at: string
  },
  branch?: Branch
}