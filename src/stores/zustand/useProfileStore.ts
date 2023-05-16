import { api } from '@/services'
import { ZProfileState } from '@/stores/zustand/type'
import { create } from 'zustand'
import Cookies from 'js-cookie'

export const useProfileStore = create<ZProfileState>()((set) => ({
  profile: null,
  isLoading: true,
  getProfile: async () => {
    console.log(Cookies.get('token_expired_at'))
    // if (Cookies.get('token_expired_at')) {
      try {
        const response = await api.profile()
        set((state) => ({ profile: response.data, isLoading: false }))
      } catch (error) {
        set((state) => ({ isLoading: false }))
      }
    // } else {
    //   set((state) => ({ isLoading: false }))
    // }
  },
  logoutProfile: async () => {
    await api.logout()
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
    Cookies.remove('token_expired_at')
    set(() => ({ profile: null }))
  },
  putProfile: (payload) => {
    set((state) => ({ profile: { ...state.profile, ...payload } }))
  }
}))