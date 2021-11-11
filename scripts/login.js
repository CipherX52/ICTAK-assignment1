document.getElementById("submitBtn").addEventListener("click",validate);
// document.getElementById("loginform").addEventListener("submit",validate);

function init(){
    document.getElementById("warn2").innerText = "";
    document.getElementById("warn1").innerText = "";
    document.getElementById("floatingInput").classList.remove("is-valid");
    document.getElementById("floatingPassword").classList.remove("is-valid");
    document.getElementById("floatingInput").classList.remove("is-invalid");
    document.getElementById("floatingPassword").classList.remove("is-invalid");
}

function validate(){
    init();
    let email = document.getElementById("floatingInput").value.trim();
    let password = document.getElementById("floatingPassword").value;
    let regex = /^([A-Za-z0-9\_\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if(!(regex.test(email)) && password!==""){
        document.getElementById("warn1").innerText = "Please enter a valid email address!";
        document.getElementById("warn1").style.color="red";
        document.getElementById("floatingInput").classList.add("is-invalid");
        document.getElementById("floatingPassword").classList.add("is-valid");
        return false;
    }
    else if(regex.test(email) && password===""){
        document.getElementById("warn2").innerText = "Password cannot be empty";
        document.getElementById("warn2").style.color = "red";
        document.getElementById("warn1").innerText = "Looks good!";
        document.getElementById("warn1").style.color = "green";
        document.getElementById("floatingInput").classList.add("is-valid");
        document.getElementById("floatingPassword").classList.add("is-invalid");
        return false;
    }
    else if(!(regex.test(email)) && password===""){
        document.getElementById("warn1").innerText = "Please enter a valid email address!";
        document.getElementById("warn1").style.color = "red";
        document.getElementById("warn2").innerText = "Password cannot be empty";
        document.getElementById("warn2").style.color = "red";
        document.getElementById("floatingInput").classList.add("is-invalid");
        document.getElementById("floatingPassword").classList.add("is-invalid");
        return false;
    }
    else if(regex.test(email) && password!==""){
        document.getElementById("floatingInput").classList.add("is-valid");
        document.getElementById("floatingPassword").classList.add("is-valid");
        document.getElementById("warn1").innerText = "Looks good!";
        document.getElementById("warn1").style.color = "green";
        return false;
    }
}