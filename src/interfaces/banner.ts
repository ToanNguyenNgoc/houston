export interface Banner {
  id: number;
  name: string;
  type: 'BRANCH' | 'VILLA' | 'WEB' | 'HOME' | 'VIDEO';
  content: string;
  url: string;
  original_id: number | string;
  status: boolean;
  deleted: boolean;
  updated_at: string;
  created_at: string;
  media?: {
    original_url: string
  }
}