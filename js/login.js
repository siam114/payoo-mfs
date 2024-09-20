// form submit page
// step-1: set event handler
document.getElementById('login-btn').addEventListener('click', function(event){

    // step-2: prevent default behavior(prevent reload browser)
    event.preventDefault();

    // step-3: get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);

    // step-4: validation numner and pin
    // this is temporary. pore onno method use korbo
    if(phoneNumber === '5' && pinNumber=== '1234'){
          window.location.href = '../home.html';
        // step-5 : allow user to use the website
    }else{
        alert('wrong phone number and pin')
    }
})