// add event handler in submit button
document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const emailText = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const passwordText = userPassword.value;

    // cheack the email and password
    if (emailText == 'baap@robin.com' && passwordText == 'robin') {
        window.location.href = 'bank.html'
    }
})