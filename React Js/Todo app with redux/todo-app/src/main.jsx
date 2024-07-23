import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import configureStore from "./Redux/store";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = configureStore();


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>

    <App />
        </PersistGate>
    </Provider>
)