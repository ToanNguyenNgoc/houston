import { Branch } from "@/interfaces/branch";
import { User } from "@/interfaces/user";
import { Villa } from "@/interfaces/villa";
import {PaymentGateway, PaymentMethod} from "./payment"

export interface Booking {
  amount: number;
  baby_count: number;
  booking_platform: string;
  branch: Branch;
  created_at: string;
  customer: User;
  customer_count: number;
  from_date_booking: string;
  id: number;
  nights: number;
  note: string;
  status_booking: string;
  to_date_booking: string;
  updated_at: string;
  villa: Villa,
  payment_method?:PaymentMethod,
  payment_gateway?:PaymentGateway
}