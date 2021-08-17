
function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    depositInput.value = '';
    return depositAmount;
}









// add event handler in deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositText = depositInput.value;
    // const depositAmount = parseFloat(depositText);
    const depositAmount = getInputValue();

    // import previous deposit amount and add with new
    const previousDeposit = document.getElementById('deposit-amount');
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const totalDepositAmount = previousDepositAmount + depositAmount;
    // set the total amount into the deposit 
    previousDeposit.innerText = totalDepositAmount;

    // add the value of deposit with balance
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    const totalBalanceAmount = balanceAmount + depositAmount;
    balance.innerText = totalBalanceAmount;

    // console.log(depositAmount);
});

// add event handler in withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    // import withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    // import previous withdraw and add with new
    const previousWithdraw = document.getElementById('withdraw');
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const totalWithdrawAmount = withdrawAmount + previousWithdrawAmount;
    previousWithdraw.innerText = totalWithdrawAmount;

    // import balance and subtract the amount of withdraw
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    const finalBalance = balanceAmount - withdrawAmount;
    balance.innerText = finalBalance;

    // console.log(withdrawAmount);
});