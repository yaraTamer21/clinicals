import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleReactLightbox from 'simple-react-lightbox';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore} from'redux'

import { Provider } from 'react-redux';
import { rootss } from './Redux/Reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
let store=createStore(rootss)
root.render(

<BrowserRouter>
 <Provider store={store}>
 <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>   
 </Provider>

    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
