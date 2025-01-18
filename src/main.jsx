
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
    <BrowserRouter>
	<ContextProvider>
		<App />
	</ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
	
);
