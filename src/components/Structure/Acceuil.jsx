import React, { useState } from 'react';
import Header from "../Head/Header";
import Profil from "../images/essai.jpg";

function Account({ accountName, onClick }) {
    return (
        <div style={accountStyle} onClick={onClick}>
            <h3>{accountName}</h3>
            {/* Ajoutez d'autres détails du compte ici si nécessaire */}
        </div>
    );
}

function WithdrawalForm() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        name: '',
        lastName: '',
        birthDate: '',
        salary: '',
        accountNumber: '',
    });

    const handleAccountClick = (accountName) => {
        setSelectedAccount(accountName);
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
    const [interestRate7Days, setInterestRate7Days] = useState(1);
    const [interestRateAfter7Days, setInterestRateAfter7Days] = useState(2);

    const handleWithdrawal = (event) => {
        event.preventDefault();

        // Calculating total available balance (including overdraft if enabled)
        let totalBalance = selectedAccount.balance;
        if (overdraftEnabled) {
            totalBalance += selectedAccount.salary / 3;
        }

        if (totalBalance >= withdrawalAmount) {
            // Allow withdrawal
            console.log('Withdrawal successful');
            // Update account balance, etc.
        } else {
            // Display error message
            console.log('Insufficient funds');
        }
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
                    {/* Options for selecting account */}
                </select>

                <label htmlFor="amount" style={labelStyle}>
                    Withdrawal Amount:
                </label>
                <input
                    type="number"
                    id="amount"
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
                <Account accountName="Account 1" onClick={() => handleAccountClick('Account 1')} />
                <Account accountName="Account 2" onClick={() => handleAccountClick('Account 2')} />
                <Account accountName="Account 3" onClick={() => handleAccountClick('Account 3')} />
                <Account accountName="Account 4" onClick={() => handleAccountClick('Account 4')} />
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

const formStyle = {
  maxWidth: '400px',
  marginTop:"20px",
  marginLeft:"60px",
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const checkboxStyle = {
  marginRight: '5px',
};

const submitButtonStyle = {
  padding: '10px 20px',
  backgroundColor: 'rgb(0, 128, 128)',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};


//COMPTE DISPONIBLE
const accountsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  
  const accountStyle = {
    width: '200px',
    height: '200px',
    margin: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    cursor: 'pointer',
  };
  
  const modalContainerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '100',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const modalStyle = {
    width: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
  };
export default WithdrawalForm;
