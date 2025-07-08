import OnboardingPage from "./pages/onboarding/OnboardingPage"
import { Toaster } from 'react-hot-toast';
import './index.css'

function App() {
  return (
    <>
      <OnboardingPage />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            // background: '#363636',
            background: '#00838f',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}

export default App
