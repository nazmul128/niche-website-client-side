import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(Name, Email, Details, Price, Address, Status, Delete) {
    return { Name, Email, Details, Price, Address, Status, Delete };
  }
  
  const myOrder = [
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
  ];

const MyOrders = () => {
    const {id}=useParams();
    const [myOrder,setMyOrder]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addUser')
        .then(res=>res.json())
        .then(data=>setMyOrder(data))
    },[myOrder])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Details</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              {/* <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {myOrder.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Email}</StyledTableCell>
                <StyledTableCell align="right">{row.Details}</StyledTableCell>
                <StyledTableCell align="right">{row.Price}</StyledTableCell>
                <StyledTableCell align="right">{row.Address}</StyledTableCell>
                <StyledTableCell align="right">{row.Status}</StyledTableCell>
                <StyledTableCell align="right">{row.Delete}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default MyOrders;