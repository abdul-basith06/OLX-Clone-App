import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App is a React component
import Context,{ FirebaseContext } from './Store/FirebaseContext';
import { auth } from './Firebase/config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Context>
     <FirebaseContext.Provider value={{auth}}>
    <App />
  </FirebaseContext.Provider>
  </Context>
  </React.StrictMode>
);
