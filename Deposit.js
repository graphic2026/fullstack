import axios from 'axios';
import React, { useState } from 'react';

function Deposit() {
    const [cus, setCustomer] = useState({ accountno: "", ifsc:"",amount: "" });

    function deposit() {
        // Make sure both account number and amount are provided
        if (!cus.accountno || !cus.amount) {
            console.error("Account number and amount are required");
            return;
        }

        axios.put(`http://localhost:8292/customers/${cus.accountno}/${cus.amount}`)
            .then((res) => {
                console.log("Deposit added successfully.....");
                // Optionally, you can clear the form fields after successful deposit
                setCustomer({ accountno: "",ifsc:"", amount: "" });
            })
            .catch((error) => {
                console.error("Error adding deposit:", error);
            });
    }

    return (
        <div>
            <h2>Deposit Amount</h2>
            <h3>
                ACCOUNT NO.:<input type="number" value={cus.accountno} onChange={(e) => setCustomer({ ...cus, accountno: e.target.value })}></input><br></br>
                IFSC:<input type="text" value={cus.ifsc} onChange={(e) => setCustomer({ ...cus, ifsc: e.target.value })}></input><br></br>
                AMOUNT:<input type="number" value={cus.amount} onChange={(e) => setCustomer({ ...cus, amount: e.target.value })}></input><br></br>
            </h3>
            <button onClick={deposit}>DEPOSIT</button>
        </div>
    );
}

export default Deposit;

