export interface ResponseList<D> {
  current_page: string;
  data: D,
  next_page: number;
  prev_page: number;
  total: number;
  total_page: number
}
export interface ResponseDetail<D> {
  data: D
}