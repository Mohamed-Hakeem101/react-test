import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { EmployeeData_API } from '../../data/employees';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Navbar from '../../views/Dashboard'
import './EmployeeTable.css'



const EmployeeTable = () => {

  const [apiData, setApiData] = useState([])
  const [search, setSearch] = useState('')

  const getApi = async () => {
    const res = await axios.get(EmployeeData_API)
    setApiData(res.data)
  }

  useEffect(() => {
    getApi()
  }, [])

 
  const deleteData = async (id) => {
    await axios.delete(EmployeeData_API + '/' + id)
    getApi()
  }

  const navigate = useNavigate()

  // using localStorage to store and update the employee datas
  const updateData = ({ id, fname, lname, email, phone, address, role }) => {
    localStorage.setItem('id', id)
    localStorage.setItem('fname', fname)
    localStorage.setItem('lname', lname)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)
    localStorage.setItem('address', address)
    localStorage.setItem('role', role)
    navigate('/update')
  }

  const addUser = () => {
    navigate('/add-user')
  }



  return (
    <div className='table-div'>
      <Navbar />
      <h2>EMPLOYEE TABLE</h2>
      <Button variant="contained" className='create-button' title='add new user to the table' onClick={addUser}>Add Employee <PersonAddAlt1Icon /></Button>
      <TextField
        id="outlined-controlled"
        label="Search First Name"
        type='text'
        title='search data with the first name'
        onChange={e => setSearch(e.target.value)}
        sx={{ backgroundColor: '#fff', margin: '10px 0px', width: '15rem' }}
      />
      <TableContainer component={Paper} className='employee-table'>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Firstname</TableCell>
              <TableCell align="right">Lastname</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiData.filter((employee) => {
              return search.toLowerCase() === '' ? employee
                : employee.fname.toLowerCase().includes(search)
            }).map((data, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{data.id}</TableCell>
                <TableCell align="right">{data.fname}</TableCell>
                <TableCell align="right">{data.lname}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.phone}</TableCell>
                <TableCell align="right">{data.address}</TableCell>
                <TableCell align="right">{data.role}</TableCell>
                <TableCell align="right" className='table-icons-box'>
                  <EditOutlinedIcon className='edit-icon table-icons' title='edit employee data' onClick={() => updateData(data)} />
                  <DeleteOutlineOutlinedIcon className='delete-icon table-icons' title='delete employee data' onClick={() => deleteData(data.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmployeeTable