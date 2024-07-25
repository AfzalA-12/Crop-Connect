import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SpiceCrop from './models/SpicesCrop.js'
import Farmer from './models/Farmer.js'
import CropMarket from './models/CropMarket.js'
import Buyer from './models/Buyer.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
