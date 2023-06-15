import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Barchart from "./animated-bar-chart-using-react-move-forked/src/BarChart.js";
import TreeElement from "./collapsible-tree-w-vx-forked/src/index.js";
import Sphere from "./react-vertex-sphere-of-spheres-forked/src/index.js"



function Nav(props) {

    return (
      <div className="header ">
  
      {/*Navigation*/}
        <Router>
              <Link to="/barchart">
                <h1>Bar-Chart</h1>
              </Link>
  
              <Link to="/tree">
              <h1>Tree</h1>
              </Link>
 
              <Link to="/sphere">
              <h1>Sphere</h1>
              </Link> 
          
  

          <Routes>
            {/* <Route path="/" element={<Home />}/>   */}
  
            <Route
              path="/barchart"
              element={<Barchart/>}
            />
  
            <Route
              path="/tree"
              element={<TreeElement />}
            />
  
         <Route
              path="/sphere"
              element={<Sphere/>}
            />
            
          </Routes>

        </Router>
      </div>
    );
  }
  
  export default Nav;