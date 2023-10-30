import './App.css';
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import Dashboard from "./views/Dashboard";
import {Provider} from 'react-redux'
import { store } from './store';
import EmployeeTable from './components/EmployeeTable/Index';
import UpdateData from './components/EmployeeTable/UpdateData';
import AddUser from './components/EmployeeTable/AddUser';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Box className='main-box'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee-table" element={<EmployeeTable />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/update" element={<UpdateData />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </Box>
  );
}

export default App;
