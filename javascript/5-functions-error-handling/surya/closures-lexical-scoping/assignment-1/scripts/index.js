const action = document.getElementById('action');
function createBankAccount() {
    let balance = 0;

    return {
        deposit: function(amount) {
            if (amount <= 0) {
                action.textContent = "Deposit amount must be greater than 0";
                return;
            }
            balance += amount;
            action.textContent = `Deposited: ₹${amount}`;
        },

        withdraw: function(amount) {
            if (amount <= 0) {
                action.textContent = "Withdrawal amount must be greater than 0";
                return;
            }
            if (amount > balance) {
                action.textContent = "Insufficient funds";
            } else {
                balance -= amount;
                action.textContent = `Withdrew: ₹${amount}`;
            }
        },

        checkBalance: function() {
            action.textContent = `Current balance: ₹${balance}`;
            return balance;
        }
    };
}

const myBankAccount = createBankAccount();

function task(event) {
    const actionType = event.target.name;

    if (actionType === "deposit") {
        const depositAmount = parseFloat(document.getElementById("deposit").value);
        document.getElementById("deposit").value = ""; 
        if (!isNaN(depositAmount)) {
            myBankAccount.deposit(depositAmount);
            
        } else {
            action.textContent = "Please enter a valid deposit amount";
        }
    } else if (actionType === "withdraw") {
        const withdrawAmount = parseFloat(document.getElementById("withdraw").value);
        document.getElementById("withdraw").value = "";
        if (!isNaN(withdrawAmount)) {
            myBankAccount.withdraw(withdrawAmount);
            
        } else {
            action.textContent = "Please enter a valid withdrawal amount";
        }   
    } else {
        myBankAccount.checkBalance();
    }
}