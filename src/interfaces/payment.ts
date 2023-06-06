export interface PaymentMethod {
  id: number,
  name: string,
  name_key: string,
  name_children: string,
  name_children_key: string,
  is_changeable: boolean,
  deleted: boolean,
  created_at: string,
  updated_at: string
}
export interface PaymentGateway {
  id: number,
  status: string,
  amount: number,
  description: string,
  transaction: number,
  txn_ref: string,
  payment_url: string,
  callback_url: string,
  created_at: string,
  updated_at: string,
  secure_hash: string
}