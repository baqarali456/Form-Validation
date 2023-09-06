

const submit = document.getElementById('submit');
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const Error = document.getElementsByClassName('error')

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    validateUsername();
    validatePassword();
    validateConfirmPassword();
})

function validateUsername(){
    if(username.value.length < 0){
        Error[0].innerText = "Please Enter A Name"
        return false
    }
    else if(username.value.length < 5){
        Error[0].innerText = "Please Enter Valid Name"
        return false
    }
    Error[0].innerText = "Valid"
    return true
    
}
function validatePassword(){
    if(password.value.length < 8){
        Error[2].innerText = "Please Enter Valid PassWord"
        return false
    }
    Error[2].innerText = "Right"
        return true
    }
    
    function validateConfirmPassword(){
        if(confirm_password.value !== password.value ){
            Error[3].innerText = "Please Enter Valid PassWord"
            return false
        }
        if(confirm_password.value.length < 8){
            Error[3].innerText = "Please Enter Valid PassWord"
            return false

        }
        Error[3].innerText = "Right"
            return true;       
}