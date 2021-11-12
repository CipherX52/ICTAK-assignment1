document.getElementById("submitBtn").addEventListener("click",validate);

function init(){
    document.getElementById("warnName").innerText = "";
    document.getElementById("warnEmail").innerText = "";
    document.getElementById("warnPhone").innerText = "";
    document.getElementById("warnPass").innerText = "";
    document.getElementById("warnRePass").innerText = "";
    document.getElementById("name").classList.remove("is-invalid");
    document.getElementById("name").classList.remove("is-valid");
    document.getElementById("email").classList.remove("is-invalid");
    document.getElementById("email").classList.remove("is-valid");
    document.getElementById("phone").classList.remove("is-invalid");
    document.getElementById("phone").classList.remove("is-valid");
    document.getElementById("Password").classList.remove("is-invalid");
    document.getElementById("Password").classList.remove("is-valid");
    document.getElementById("Password2").classList.remove("is-invalid");
    document.getElementById("Password2").classList.remove("is-valid");
    var warnings = document.getElementsByClassName("warn");
    for (var i=0; i<warnings.length; i++){
        warnings[i].style.color="red";
    }
}

function strengthChecker(x){
    regMedium = /^$/;
    regStrong = /^$/;
    if(regStrong.test(x)){
        return("strong");
    }
    else if(regMedium.test(x)){
        return("medium");
    }
    else{
        return("weak")
    }
}

function validate(){
    let regName = /^([a-zA-Z]+)([\s[a-zA-Z]+]*)?$/;
    let regPhone = /^(\d{3}([\.\-\s])?){2}(\d){4}$/;
    let regEmail = /^([\w\.\-]+)@([\w^\_\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    // let regPass = //;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let pass = document.getElementById("Password");
    let pass2 = document.getElementById("Password2");
    let a = 0;

    init();

    // name
    if(name.value.trim()===""){
        document.getElementById("warnName").innerText = "Name cannot be empty";
        name.classList.add("is-invalid");
    }
    else if(!(regName.test(name.value.trim()))){
        document.getElementById("warnName").innerText = "Please enter a valid name";
        name.classList.add("is-invalid");
    }
    else{
        document.getElementById("warnName").innerText = "Looks good!";
        document.getElementById("warnName").style.color = "green";
        name.classList.add("is-valid");
        a++;
    }

    // email
    if(email.value.trim()===""){
        document.getElementById("warnEmail").innerText = "Email cannot be empty";
        email.classList.add("is-invalid");
    }
    else if(!(regEmail.test(email.value.trim()))){
        document.getElementById("warnEmail").innerText = "Please enter a valid email address";
        email.classList.add("is-invalid");
    }
    else{
        document.getElementById("warnEmail").innerText = "Looks good!";
        document.getElementById("warnEmail").style.color="green";
        email.classList.add("is-valid");
        a++
    }

    // phone
    if(phone.value.trim()===""){
        document.getElementById("warnPhone").innerText = "Phone number cannot be empty";
        phone.classList.add("is-invalid");
    }
    else if(!(regPhone.test(phone.value.trim()))){
        document.getElementById("warnPhone").innerText = "Please enter a valid 10 digit phone number";
        phone.classList.add("is-invalid");
    }
    else{
        document.getElementById("warnPhone").innerText = "Looks good!";
        document.getElementById("warnPhone").style.color="green";
        email.classList.add("is-valid");
        a++
    }

    // password1
    if(pass.value===""){
        document.getElementById("warnPass").innerText = "Password cannot be empty";
        pass.classList.add("is-invalid");
    }
    
    // implement a dynamic strength meter for password, that updates as the password is entered
    // so have to use a different function which listens to a different event on a different element
    // else if(){
    //     document.getElementById("warnPass").innerText = "Password must be atleast 8 characters long with at least one number, an uppercase letter and a lower case letter";
    //     pass.classList.add("is-invalid");
    // }

    else if(strengthChecker(pass.value)==="strong"){
        document.getElementById("warnPass").innerText = "Looks good!";
        document.getElementById("warnPass").style.color="green";
        pass.classList.add("is-valid");
        a++
    }

    // password2
    if(pass2.value===""){
        document.getElementById("warnRePass").innerText = "Please re-enter your password";
        pass2.classList.add("is-invalid");
    }
    else if(pass2.value !== pass.value){
        document.getElementById("warnRePass").innerText = "Passwords do not match";
        pass2.classList.add("is-invalid");
    }
    else{
        document.getElementById("warnRePass").innerText = "Looks good!";
        document.getElementById("warnRePass").style.color="green";
        pass2.classList.add("is-valid");
        a++
    }

    
    // uncomment the conditional block below to return a  true and execute the action for the form
    // currently, for the purpose of validation and showcasing the validation, the action won't be executed

    // if(a===5){
    //     return true;
    // }

    alert(a);
    return false;
}