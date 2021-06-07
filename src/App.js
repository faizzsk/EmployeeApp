import React from "react";
import reactdom from "react-dom"
import "./App.css";
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"
import HomePage from "./Forms/HomePage";

//import About from "./components/pages/About";
//import Contact from "./components/pages/Contact";
import Navbar from "./Layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import AddEmployee from "./CRUD/AddEmployee";
//import NotFound from "./components/pages/NotFound";
import UpdateEmployee from "./CRUD/UpdateEmployee";
import View from "./CRUD/View";
//import User from "./components/users/User";
 
function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

      </div> 
       <Switch>
          <Route exact path="/Forms/HomePage" component={HomePage} />
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/CRUD/AddEmployee" component={AddEmployee} />
          <Route exact path="/CRUD/UpdateEmployee/:id" component={UpdateEmployee} />

          {/* <Route exact path="/users/edit/:id" component={EditUser} /> */}
          <Route exact path="/CRUD/View/:id" component={View} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      
    </Router>
  );
}

export default App;
