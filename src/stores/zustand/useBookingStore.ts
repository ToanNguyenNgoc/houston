import { ZBookingState } from '@/stores/zustand/type'
import { create } from 'zustand'
import { storage } from '@/utils'

const { getItem, setItem } = storage()
const dataSession = getItem('BOOKING', 'session')
export const useBookingStore = create<ZBookingState>()((set) => ({
  data: {
    villa: dataSession ? JSON.parse(dataSession)?.villa : null,
    booking_value: dataSession ? JSON.parse(dataSession)?.booking_value : null,
  },
  onSetBooking: (villa, booking_value) => {
    const data = {
      villa: villa,
      booking_value: booking_value
    }
    setItem('BOOKING', JSON.stringify(data), 'session')
    set((state) => ({ data: data }))
  },
}))