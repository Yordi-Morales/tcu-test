import React, { useState } from 'react';
import './loanstyle.css';

const Loan = () => {
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [interest, setInterest] = useState('');
    const [deposit, setDeposit] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [result, setResult] = useState('');

    const calcFinance = (e) => {
        e.preventDefault();

        if (amount <= 0 || term <= 0 || interest < 0 || deposit < 0) {
            setErrorMessage('Porfavor ingresa datos validos');
            setResult('');
            return;
        }

        if (interest === 0) {
            const monthlyNoInterest = (amount - deposit) / term;
            setResult(`A pagar: ₡${monthlyNoInterest.toFixed(2)}/mes`);
        } else {
            const interestPay = parseFloat(interest) / 100 / 12;
            const power = Math.pow(1 + interestPay, term);
            const monthly = ((amount - deposit) * power * interestPay) / (power - 1);
            setResult(`A pagar: ₡${monthly.toFixed(2)}/mes`);
        }

        setErrorMessage('');
    };

    return (
        <div className="loan">
            <h2>Calcula cuanto debes de pagar por un credito</h2>
            <form onSubmit={calcFinance}>
                <div className="form-group">
                    <label htmlFor="amount">Monto de Credito:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="term">Duracion(meses):</label>
                    <input
                        type="number"
                        id="term"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="interest">Interes(%):</label>
                    <input
                        type="number"
                        step="0.01"
                        id="interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="deposit">Deposito(opciona):</label>
                    <input
                        type="number"
                        id="deposit"
                        value={deposit}
                        onChange={(e) => setDeposit(e.target.value)}
                    />
                </div>
                {result && <p className="result">{result}</p>}

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit">Calcular</button>
            </form>
        </div>
    );
};

export default Loan;
