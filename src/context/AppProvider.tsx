import { User } from "@/interfaces"
import { ReactNode, createContext, useEffect } from "react";
import { useProfileStore } from "@/stores/zustand";
import { ZProfileState } from "@/stores/zustand/type";

export type AppContextType = {
  user: User | null
}
export const AppContext = createContext<AppContextType | null>(null);
export function AppProvider({ children }: { children: ReactNode }) {
  const [getProfile, profile] = useProfileStore((state: ZProfileState) => [state.getProfile, state.profile])
  useEffect(() => {
    getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const value = {
    user: null
  }
  return <AppContext.Provider value={value} > {children} </AppContext.Provider>;
}