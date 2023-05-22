import 'react-toastify/dist/ReactToastify.css';
import '../../app/globals.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';
import EduFundaTheme from '../theme';
import { ToastContainer } from 'react-toastify';
  

const noAuthRequired = ['/', '/login', '/signup', '/forget-pwd'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AuthContextProvider>
      <EduFundaTheme>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
        ) : (
            <ProtectedRoute>
            <Component {...pageProps} />
            </ProtectedRoute>
        )}
      </EduFundaTheme>
    </AuthContextProvider>
  )
}

export default MyApp
