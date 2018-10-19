var form = document.querySelector(".form-container");
var btn = document.querySelector(".btn");
var fields = document.querySelectorAll(".field");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    deleteErrorMessage();
    valiateEmptyFields();
    var errorCounter = document.querySelectorAll(".error").length;
    if(errorCounter == 0) {
        form.submit();
    }
});


function valiateEmptyFields() {
    for (var i=0; i<fields.length; i++) {
        fields[i].style.border="1px solid #ddd";

        if(!fields[i].value) {
            var errorMessage = "This field is required";
            showErrorMessage(i,errorMessage);
        } else {
            inputValidation(i);
        }
    }
}

function inputValidation(i) {
    var text = fields[i].getAttribute("data-validation");
    if (text == "text") {
        validateText(i);
    } else if (text == "email") {
        validateEmail(i);
    } else if(text == "password") {
        validatePassword(i);
    }
}

function validateText(i) {
    var a = fields[i].value;
    if(a.match(/['"]/)) {
        var errorMessage = "This field can not include &#39 and &#34";
        showErrorMessage(i,errorMessage);
    }
}

function validateEmail(i) {
    var b = fields[i].value;
    if(!(b.match(/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i))) {
        var errorMessage = "Not valid email";
        showErrorMessage(i,errorMessage);
    }
}

function validatePassword(i) {
    var c = fields[i].value;
    if(!(c.match(/[0-9a-z_]{6}/i))) {
        var errorMessage = "At least six characters";
        showErrorMessage(i,errorMessage);
    }
}

function showErrorMessage(i,errorMessage) {
    fields[i].style.border="1px solid red";
    var error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.innerHTML = errorMessage;
    fields[i].parentElement.appendChild(error);
}

function deleteErrorMessage() {
    var errors = form.querySelectorAll(".error");
    for(var i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}
