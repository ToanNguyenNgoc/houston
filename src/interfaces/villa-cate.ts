import { Branch } from "@/interfaces/branch"

export interface VillaCate {
  id: number,
  villa_cate_name: string,
  description: string,
  villa_cate_image?: {
    original_url: string
  },
  branch: Branch
}