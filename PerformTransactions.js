import axios from 'axios';
import React, { useState } from 'react';

function PerformTransactions() {
    const [fromAccount, setFromAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [message, setMessage] = useState('');

    function performTransaction() {
        // Make sure all fields are provided
        if (!fromAccount || !amount || !toAccount) {
            setMessage("All fields are required");
            return;
        }

        // Make sure amount is a positive number
        if (isNaN(amount) || amount <= 0) {
            setMessage("Amount must be a positive number");
            return;
        }

        axios.post(`http://localhost:8292/transactions/${fromAccount}/${amount}/${toAccount}`)
            .then((res) => {
                setMessage(res.data);
                // Clear form fields after successful transaction
                setFromAccount('');
                setAmount('');
                setToAccount('');
            })
            .catch((error) => {
                setMessage(`Error performing transaction: ${error.response.data}`);
            });
    }

    return (
        <div>
            <h2>Perform Transaction</h2>
            <div>
                <label htmlFor="fromAccount">From Account:</label>
                <input type="number" id="fromAccount" value={fromAccount} onChange={(e) => setFromAccount(e.target.value)} />
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label htmlFor="toAccount">To Account:</label>
                <input type="number" id="toAccount" value={toAccount} onChange={(e) => setToAccount(e.target.value)} />
            </div>
            <button onClick={performTransaction}>Perform Transaction</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default PerformTransactions;
