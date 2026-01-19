let email;
let subject;
let message;
let valid = true;

function atCount(email){
    let count = 0
    for (let i = 0; i < email.length; i++){
        if (email[i] == "@"){
            count++;
        }
    }
    return count;
}

document.getElementById("mySubmit").onclick = function(){
    email = document.getElementById("emailInput").value;
    subject = document.getElementById("subjectInput").value;
    message = document.getElementById("messageInput").value;
    if (email.includes("@") == false || email.includes(".") == false || atCount(email) > 1){
        alert("Invalid email address.");
        valid = false;
    }
    if (subject == ""){
        alert("Please include a subject for your message.")
        valid = false;
    }
    if (message == ""){
        alert("Email can not be sent without a message.")
        valid = false;
    }
}