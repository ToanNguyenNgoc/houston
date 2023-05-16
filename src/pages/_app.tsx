import { AppPropsWithLayout } from '@/common'
import { RouteProgress } from '@/components'
import { EmptyLayout } from '@/layouts'
import '@/styles/globals.css'
import { queryClient } from '@/config'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from '@/context'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <>
      <LocalizationProvider 
        dateAdapter={AdapterDateFns}
      >
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <RouteProgress />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </AppProvider>
      </LocalizationProvider>
    </>
  )
}
