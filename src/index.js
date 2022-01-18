import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

import './index.css';
import PersonContextProvider from './contexts/PersonContextProvider';
import reportWebVitals from './reportWebVitals';

const ImcApp = lazy(() => import("./apps/App"))
const OtherApp = lazy(() => import("./apps/Other"))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/imc">Imc App...</Link>
          </li>
          <li>
            <Link to="/other">Other App...</Link>
          </li>
        </ul>
      </div>
      <br />
      <Routes>
        <Route
          path="/imc"
          element={<Suspense fallback={<span>loading imc...</span>}>
            <PersonContextProvider>
              <ImcApp />
            </PersonContextProvider>
          </Suspense>} />
        <Route
          path="/other"
          element={<Suspense fallback={<span>loading other...</span>}>
            <PersonContextProvider>
              <OtherApp />
            </PersonContextProvider>
          </Suspense>} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
