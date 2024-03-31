import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Head/Header";
import { formStyle, labelStyle, inputStyle, checkboxStyle, submitButtonStyle, accountsContainerStyle, accountStyle, modalContainerStyle, modalStyle } from '../../assets/withdrawalForm';

function Account({ account, onClick }) {
    return (
        <div style={accountStyle} onClick={() => onClick(account)}>
            <h3>{account}</h3>
            {/* Ajoutez d'autres détails du compte ici si nécessaire */}
        </div>
    );
}

function WithdrawalForm() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [accountTypes, setAccountTypes] = useState([]);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        name: '',
        lastName: '',
        birthDate: '',
        salary: '',
        accountNumber: '',
    });

    useEffect(() => {
        // Charger la liste des types de compte depuis l'API
        axios.get('http://localhost:8080/api/account-types/names')
            .then(response => {
                setAccountTypes(response.data);
                console.log("response", response.data);
            })
            .catch(error => {
                console.error('Error fetching account types:', error);
            });
    }, []);

    const handleAccountClick = (account) => {
        setSelectedAccount(account.account_number);
        setShowRegistrationForm(true);
    };

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        // Logique de soumission du formulaire d'inscription
        console.log('Registration submitted:', registrationData);
        // Réinitialiser les données d'inscription après la soumission
        setRegistrationData({
            name: '',
            lastName: '',
            birthDate: '',
            salary: '',
            accountNumber: '',
        });
        setShowRegistrationForm(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegistrationData({
            ...registrationData,
            [name]: value,
        });
    };

    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const [withdrawalDateTime, setWithdrawalDateTime] = useState('');
    const [overdraftEnabled, setOverdraftEnabled] = useState(false);
    const [interestRate7Days, setInterestRate7Days] = useState();
    const [interestRateAfter7Days, setInterestRateAfter7Days] = useState();

    const handleWithdrawal = (event) => {
        event.preventDefault();

        // Afficher les valeurs avant l'envoi de la requête de retrait
        console.log('Selected Account:', selectedAccount);
        console.log('Withdrawal Amount:', withdrawalAmount);
        console.log('Withdrawal Date:', withdrawalDateTime);
        console.log('Overdraft Enabled:', overdraftEnabled);
        console.log('Interest Rate for First 7 Days:', interestRate7Days);
        console.log('Interest Rate After 7 Days:', interestRateAfter7Days);

        // Envoi de la requête de retrait à l'API avec la date de la transaction
        axios.post(`http://localhost:8080/api/accounts/withdraw/${selectedAccount}`, {
            balance: parseFloat(withdrawalAmount),
            transactionDateTime: withdrawalDateTime // Envoyer la date de la transaction dans le corps de la requête
        })
            .then(response => {
                console.log('Withdrawal successful');
                // Mettre à jour l'état du compte ou effectuer d'autres opérations nécessaires
            })
            .catch(error => {
                console.error('Error withdrawing funds:', error);
                // Afficher un message d'erreur à l'utilisateur
            });
    };


    return (
        <>
            <Header />
            <form onSubmit={handleWithdrawal} style={formStyle}>
                <label htmlFor="account" style={labelStyle}>
                    Select Account:
                </label>
                <select
                    id="account"
                    value={selectedAccount}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                    required
                    style={inputStyle}
                >
                    {accountTypes.map((account, index) => (
                        <option key={index} value={account}>{account}</option>
                    ))}
                </select>

                <label htmlFor="balance" style={labelStyle}>
                    Withdrawal Balance:
                </label>
                <input
                    type="number"
                    id="balance"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    required
                    style={inputStyle}
                />

                <label htmlFor="datetime" style={labelStyle}>
                    Date and Time of Withdrawal:
                </label>
                <input
                    type="datetime-local"
                    id="datetime"
                    value={withdrawalDateTime}
                    onChange={(e) => setWithdrawalDateTime(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    type="checkbox"
                    id="overdraft"
                    checked={overdraftEnabled}
                    onChange={(e) => setOverdraftEnabled(e.target.checked)}
                    style={checkboxStyle}
                />
                <label htmlFor="overdraft" style={{ ...labelStyle, marginLeft: '10px' }}>
                    Enable Overdraft
                </label>

                <div>
                    <label htmlFor="interest7days" style={labelStyle}>
                        Interest Rate for First 7 Days:
                    </label>
                    <input
                        type="number"
                        id="interest7days"
                        value={interestRate7Days}
                        onChange={(e) => setInterestRate7Days(e.target.value)}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label htmlFor="interestAfter7days" style={labelStyle}>
                        Interest Rate After 7 Days:
                    </label>
                    <input
                        type="number"
                        id="interestAfter7days"
                        value={interestRateAfter7Days}
                        onChange={(e) => setInterestRateAfter7Days(e.target.value)}
                        style={inputStyle}
                    />
                </div>

                <button type="submit" style={submitButtonStyle}>
                    Withdraw
                </button>
            </form>

            <div style={accountsContainerStyle}>
                {accountTypes.map((account, index) => (
                    <Account key={index} account={account} onClick={handleAccountClick} />
                ))}
            </div>
            {showRegistrationForm && (
                <div style={modalContainerStyle}>
                    <div style={modalStyle}>
                        {/* Ajoutez le formulaire d'inscription ici */}
                        <h2>Registration Form for {selectedAccount}</h2>
                        {/* Ajoutez les champs du formulaire ici */}
                        <form onSubmit={handleRegistrationSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={registrationData.name}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={registrationData.lastName}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="birthDate">Birth Date:</label>
                            <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                value={registrationData.birthDate}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="salary">Salary:</label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                value={registrationData.salary}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="accountNumber">Account Number:</label>
                            <input
                                type="text"
                                id="accountNumber"
                                name="accountNumber"
                                value={registrationData.accountNumber}
                                onChange={handleInputChange}
                                required
                            />

                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default WithdrawalForm;
