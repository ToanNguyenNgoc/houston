import { ReqBooking, ReqProfile, User, Villa } from "@/interfaces";

export type ZProfileState = {
  profile: User | null;
  isLoading: boolean;
  getProfile: () => Promise<void>;
  logoutProfile: () => Promise<void>;
  putProfile: (newProfile: User) => void
}
export type ZBookingState = {
  data: {
    villa: Villa | null;
    booking_value: ReqBooking | null
  },
  onSetBooking: (villa: Villa, booking_value: ReqBooking) => void,
}