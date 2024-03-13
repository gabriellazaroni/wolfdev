import React from 'react';
import GlobalStyle from './globalStyles';
import { ToastContainer } from 'react-toastify';
import Amplify from 'aws-amplify';

import amplifyConfig from './services/amplify-config';

import GlobalRoutes from './routes/routes';

import 'react-toastify/dist/ReactToastify.css';

Amplify.configure(amplifyConfig);

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyle />
      <GlobalRoutes />
    </>
  );
}

export default App;
