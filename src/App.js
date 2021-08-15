import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from './Components/Background';
import Page from './Components/Page';
import background from './Images/Left.png'

import {
  BrowserRouter as Router
} from "react-router-dom";
const App = () => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App d-lg-flex d-blockd-md-block">
        <header className="col-xl-5 col-lg-4 col-md-12 background justify-content-center align-items-center d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
          {<Background />}
        </header>
        <main className={`overflow-auto p-3 p-sm`} >
          <Page />
        </main>
      </div>
    </Router>
  );
}



export default App;
