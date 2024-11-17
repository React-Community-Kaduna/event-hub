import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './stateManagement/GlobalContext.jsx'
import { Provider } from 'react-redux'
import store from './services/app-contex.js'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='346452311147-n7s0kslpo5ha0a6v3pg0jt0vet2838b6.apps.googleusercontent.com'>
  <GlobalProvider>
    <Provider store={store}>
      <App />
      <Toaster position='top-center' reverseOrder={false} 
       toastOptions={{
        // Define default options
        className: 'bg-white text-black shadow-md rounded-lg px-4 py-2',
        duration: 5000,
    
        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
      />
    </Provider>
  </GlobalProvider>
  </GoogleOAuthProvider>
)
