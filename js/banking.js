/* function doubleIt(num) {
    const result = num * 2;
    return result;
}

const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7); */

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousAmount = parseFloat(totalText);
    const totalAmount = previousAmount + amount;
    totalElement.innerText = totalAmount;
};
function updateBalance(amount, isAdd) {
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    if (isAdd == true) {
        const totalBalanceAmount = balanceAmount + amount;
        balance.innerText = totalBalanceAmount;
    }
    else {
        const totalBalanceAmount = balanceAmount - amount;
        balance.innerText = totalBalanceAmount;
    }
}

// add event handler in deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    updateBalance(depositAmount, true);
    updateTotalField('deposit-amount', depositAmount);


    // const depositInput = document.getElementById('deposit-input');
    // const depositText = depositInput.value;
    // const depositAmount = parseFloat(depositText);

    // import previous deposit amount and add with new
    // const previousDeposit = document.getElementById('deposit-amount');
    // const previousDepositText = previousDeposit.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const totalDepositAmount = previousDepositAmount + depositAmount;

    // set the total amount into the deposit 
    // previousDeposit.innerText = totalDepositAmount;

    // add the value of deposit with balance

    /* const balance = document.getElementById('balance');

    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    const totalBalanceAmount = balanceAmount + depositAmount;
    balance.innerText = totalBalanceAmount; */

    // console.log(depositAmount);
});

// add event handler in withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');

    updateTotalField('withdraw', withdrawAmount);
    updateBalance(withdrawAmount, false)


    // import withdraw input
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawText);

    // import previous withdraw and add with new
    // const previousWithdraw = document.getElementById('withdraw');
    // const previousWithdrawText = previousWithdraw.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);
    // const totalWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    // previousWithdraw.innerText = totalWithdrawAmount;
    // import balance and subtract the amount of withdraw
    /* 
       const balance = document.getElementById('balance');
       const balanceText = balance.innerText;
       const balanceAmount = parseFloat(balanceText);
       const finalBalance = balanceAmount - withdrawAmount;
       balance.innerText = finalBalance; */

    // console.log(withdrawAmount);
});