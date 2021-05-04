import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import Routes from './Global/Routes.jsx';
import GlobalSpinner from './Global/Spinner/GlobalSpinner';
import GlobalSpinnerContextProvider from "./Global/Spinner/GlobalSpinnerContext";


render(
  <StrictMode>
    <GlobalSpinnerContextProvider>
      <GlobalSpinner />
      <Routes />
    </GlobalSpinnerContextProvider>
  </StrictMode>,
  document.getElementById('root')
);



// import React from "react";
// import { render } from "react-dom";
// import RandomComments from "./Components/RandomComments";
// import GlobalSpinner from './Global/Spinner/GlobalSpinner';
// import GlobalSpinnerContextProvider from "./Global/Spinner/GlobalSpinnerContext";
// import "./style.css";

// const App = () => {
//   return (
//     <GlobalSpinnerContextProvider>
//       <>
//         <GlobalSpinner />
//         <RandomComments />
//         {console.log('parent-index.js')}
//       </>
//     </GlobalSpinnerContextProvider>
//   );
// };

// render(<App />, document.getElementById("root"));
