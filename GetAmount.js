import axios from 'axios';
import React, { useState } from 'react';

function GetAmount() {
    const [accountNo, setAccountNo] = useState('');
    const [amount, setAmount] = useState(null);

    function getAmount() {
        // Make sure account number is provided
        if (!accountNo) {
            console.error("Account number is required");
            return;
        }

        axios.get(`http://localhost:8292/customers/${accountNo}`)
            .then((res) => {
                // Extract the amount from the response data
                setAmount(res.data);
            })
            .catch((error) => {
                console.error("Error fetching amount:", error);
            });
    }

    return (
        <div>
            <h2>Get Amount</h2>
            <h3>
                ACCOUNT NO.:<input type="number" value={accountNo} onChange={(e) => setAccountNo(e.target.value)}></input><br></br>
            </h3>
            <button onClick={getAmount}>GET AMOUNT</button>
            {amount !== null && <p>Amount: {amount}</p>}
        </div>
    );
}

export default GetAmount;
