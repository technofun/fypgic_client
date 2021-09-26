import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import AddStudent from './components/student/AddStudent'

import { StudentDataProvider } from "./components/contexts/studentContext";
import StudentData from "./components/student/mainScreen/studentData";
import ScanScreen from "./components/student/mainScreen/scanScreen";
import NavigationBar from "./components/NavigationBar";
import LoginScreen from "./components/student/mainScreen/LoginScreen";
import ProtectedRoutes from "./components/ProtectedRoutes";
import GenerateQr from "./components/admin/GenerateQr";
import AddMarksForm from "./components/admin/AddMarksForm";
function App() {
  const [token, setToken] = useState('')
  // setToken(localStorage.getItem('user'))

  return (
    <StudentDataProvider>
      <Router>
        {/* <NavigationBar /> */}
        <Switch>
          {/* <Route exact path="/">
            <HomePage />
          </Route> */}

          {/* <Route path="/addStudent" component={AddStudent} /> */}
          <Route path="/login" component={LoginScreen} />
          <ProtectedRoutes exact path="/" component={HomePage} />
          <ProtectedRoutes exact path="/addStudent" component={AddStudent} />
          <Route path="/studentdata" component={StudentData} />
          <Route path="/generateqr" component={GenerateQr} />
          <Route path="/scanstudent" component={ScanScreen} />
          <Route path="/updatemarks" component={AddMarksForm} />
        </Switch>
      </Router>
    </StudentDataProvider>
  );
}

export default App;
