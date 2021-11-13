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
}

function strengthChecker(x){
    let regMedium1 = /(?=.*?[0-9])(?=.*?[a-z])(?=.{8,}?)/;
    let regMedium2 = /(?=.*?[0-9])(?=.*?[A-Z])(?=.{8,}?)/;
    let regMedium3 = /(?=.*?[a-z])(?=.*?[A-Z])(?=.{8,}?)/;
    let regMedium4 = /(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.{5,7}?)/;
    let regStrong = /(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.{8,}?)/;
    if(regStrong.test(x)){
        return("strong");
    }
    else if(regMedium1.test(x)||regMedium2.test(x)||regMedium3.test(x)||regMedium4.test(x)){
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
        phone.classList.add("is-valid");
        a++
    }

    // password1
    if(pass.value===""){
        document.getElementById("warnPass").innerText = "Password cannot be empty";
        pass.classList.add("is-invalid");
    }
    
    // implement a dynamic strength meter for password, that updates as the password is entered...
    // so have to use a different function which listens to a different event on a different element (possibly the same element)
    // gonna leave this for now, get back to it later maybe (probably)

    else if(strengthChecker(pass.value)==="weak"){
        document.getElementById("warnPass").innerText = "Password must be at least 8 characters long with at least one number, an uppercase letter and a lower case letter";
        document.getElementById("strength").innerText = "Password strength is weak";
        document.getElementById("strength").style.backgroundColor = "rgba(255, 0, 0, 0.8)";
        document.getElementById("strength").style.display="inherit";
        pass.classList.add("is-invalid");
    }
    else if(strengthChecker(pass.value)==="medium"){
        document.getElementById("warnPass").innerText = "Password must be at least 8 characters long with at least one number, an uppercase letter and a lower case letter";
        document.getElementById("strength").innerText = "Password strength is medium";
        document.getElementById("strength").style.backgroundColor = "rgba(255, 165, 0, 0.8)";
        document.getElementById("strength").style.display="inherit";
        pass.classList.add("is-invalid");
    }
    else if(strengthChecker(pass.value)==="strong"){
        document.getElementById("strength").innerText = "Password is strong";
        document.getElementById("strength").style.backgroundColor = "rgba(0, 255, 0, 0.8)";
        document.getElementById("strength").style.display="inherit";
        pass.classList.add("is-valid");
        a++
    }

    // password2
    if(pass2.value===""||strengthChecker(pass.value)!=="strong"){
        document.getElementById("warnRePass").innerText = "Please re-enter your password";
        pass2.classList.add("is-invalid");
    }
    else if(pass2.value !== pass.value){
        document.getElementById("warnRePass").innerText = "Passwords do not match";
        pass2.classList.add("is-invalid");
    }
    else{
        pass2.classList.add("is-valid");
        a++
    }

    if(a===5){
        return false;
        //change the above return value to true, so that the form action may be executed after validation
        //currently set to false, so that validation mey be observed after successful completion
    }
    // alert(a);
    return false;
}