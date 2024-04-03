import React, { useState,useEffect } from 'react'
import './../styles.css';
import axios from 'axios';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import Registration from '../components/Registration';

import GetAmount from '../components/GetAmount';
import PerformTransactions from '../components/PerformTransactions';

function CustomerManagement() {
    const [customers,setCustomers]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8292/customers")
          .then((resp)=>{
            //console.log(resp.data);
            setCustomers(resp.data)
          })
      })
  return (
    <div className="App">
    <h1>Banking Management Application</h1>
    <hr></hr>
    <Registration/>
    <hr></hr>
    <Deposit/>
    <hr></hr>
    <Withdraw/>
    <hr></hr>
    <GetAmount/>
    <hr></hr>
    <PerformTransactions/>
    <hr></hr>
    <table>
      <tr>
      <th>ACCOUNT NUMBER</th>
      <th>IFSC</th>
      <th>AMOUNT</th>
     
      </tr>
      {
        customers.map((cus)=>{
          return (
            <tr>
              <td>{cus.accountno}</td>
              <td>{cus.ifsc}</td>
              <td>{cus.amount}</td>
            
            </tr>
          )
        })
      }
    </table>
    <hr></hr>
  
  </div>
  )
}

export default CustomerManagement
