import axios from 'axios';
import React, { useState } from 'react';

function Registration() {
    const [cus, setCustomer] = useState({ accountno: "", ifsc:"",amount: "" });

    function register(evt){
        evt.preventDefault();
        console.log(cus);
        axios.post("http://localhost:8292/customers",cus)
        .then((res)=>{
            console.log("Customer added successfully.....")
            setCustomer({accountno: "", ifsc:"",amount: "" })
        })
    }


  return (
    <div>
        <h2>Registration</h2>
            <h3>
                ACCOUNT NO.:<input type="number" value={cus.accountno} onChange={(e) => setCustomer({ ...cus, accountno: e.target.value })}></input><br></br>
                IFSC:<input type="text" value={cus.ifsc} onChange={(e) => setCustomer({ ...cus, ifsc: e.target.value })}></input><br></br>
                AMOUNT:<input type="number" value={cus.amount} onChange={(e) => setCustomer({ ...cus, amount: e.target.value })}></input><br></br>
            </h3>
            <button onClick={register}>REGISTER</button>
      
    </div>
  )
}

export default Registration
