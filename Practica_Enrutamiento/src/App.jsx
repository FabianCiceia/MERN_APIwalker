import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home"
import Number from "./components/Number";
import Hello from "./components/Hello"
function App() {
  return (
    <div>
        <Routes>
          <Route path="/home" element={<Home/>  } />
          <Route path="/hello/:color/:background" element={<Hello/>}/>
          <Route path="/:number" element={<Number/>}/>
        </Routes>
    </div>
  );
}
    
export default App;
