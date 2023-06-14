export interface User {
  avatar?: {
    original_url: string
  },
  ccid: string;
  country: string;
  created_at: string;
  deleted: boolean;
  dob: string;
  email: string;
  full_address: string;
  fullname: string;
  id: number;
  job: string;
  refresh_token: string;
  sex: boolean;
  status: boolean;
  telephone: string;
  token: string;
  token_expired_at: string;
  updated_at: string;
  social_avatar?: string;
  social_id?: string;
  social_platform?: string;
}