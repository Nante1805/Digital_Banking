import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/BalanceViewer.css';

function BalanceViewer() {
    const [accounts, setAccounts] = useState([]);
    const [selectedAccountId, setSelectedAccountId] = useState(null);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date()); // State pour la date sélectionnée, initialisé à la date d'aujourd'hui

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/accounts');
            setAccounts(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des comptes :', error);
        }
    };

    const handleAccountSelect = (accountId) => {
        setSelectedAccountId(accountId);
        const account = accounts.find(account => account.id === accountId);
        setSelectedAccount(account);
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setSelectedDate(selectedDate);
    };

    return (
        <div className="balance-container">
            <h1>Solde</h1>
            <div className="account-dropdown">
                <label htmlFor="account-select">Choisir un compte :</label>
                <select id="account-select" value={selectedAccountId} onChange={(e) => handleAccountSelect(parseInt(e.target.value))}>
                    <option value="">Sélectionner un compte</option>
                    {accounts.map(account => (
                        <option key={account.id} value={account.id}>{account.account_number}</option>
                    ))}
                </select>
            </div>
            <div className="date-picker">
                <label htmlFor="date-select">Choisir une date :</label>
                <input type="date" id="date-select" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} />
            </div>
            {selectedAccount && (
                <div className="balance-card">
                    <h2>Account Number: {selectedAccount.account_number}</h2>
                    <h2>Solde Principal: {selectedAccount.balance}</h2>
                    <h2>Prêts: {selectedAccount.loans}</h2>
                    <h2>Intérêts des Prêts: {selectedAccount.loanInterests}</h2>
                    <h2>Limite de découvert : {selectedAccount.overdraft_credit_percentage}</h2>
                    <h2>Taux d'intérêt après 7 jours : {selectedAccount.interest_rate_7_days}</h2>
                </div>
            )}
        </div>
    );
}

export default BalanceViewer;
