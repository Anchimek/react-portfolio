import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './components/Context'

const container = document.getElementById('root')
ReactDOM.createRoot(
        container
    ).render(
        <ContextProvider>
            <App />
        </ContextProvider>
    )

