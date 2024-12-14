function submitForm() {
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    
    if (email === "") {
        alert("Email filled out")
    }
    
    if (password === "") {
        alert("Password filled out")
    }


    return false;
}