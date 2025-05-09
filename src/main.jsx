import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource-variable/roboto'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Chatbot } from './components/index.components.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Chatbot />
    </BrowserRouter>
  </Provider>
)
