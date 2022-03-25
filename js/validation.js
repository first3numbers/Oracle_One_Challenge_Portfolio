export function validate(input) {
    const inputType = input.dataset.type

    //dataset type = informs which input field was filled

    if (validators[inputType]) {
        validators[inputType](input)
    }

    // if the filled field belongs in the accepted specified field types, concatenate the input along the field information

    if (input.validity.valid) {
        input.parentElement.classList.remove("input_container--invalid")
        input.parentElement.querySelector(".input-error-message").textContent = ""
    } else {
        input.parentElement.classList.add("input_container--invalid")
        input.parentElement.querySelector(".input-error-message").textContent = showErrorMessage(inputType, input)
    }

    //if the validity is true, 

}

//this section configures the validation settings 

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "tooLong"
]

//the types of error for validation

const validators = {
    fullName: input => validateFullName(input),
    emailAddress: input => validateEmailAddress(input),
    phoneNumber: input => validatePhoneNumber(input),
    subject: input => validateSubject(input)
}

//this anonymous function forwards the field types to their respective validation functions

const errorMessages = {
    fullName: {
        customError: "The name field must not be empty.",
        typeMismatch: "The name must contain at least 3 letters and must not contain any numbers or symbols.",
        valueMissing: "The name field must not be empty."
    },
    emailAddress: {
        valueMissing: "The email field must not be empty.",
        typeMismatch: "The informed e-mail is not valid."
    },
    phoneNumber: {
        valueMissing: "The phone number field must not be empty.",
        typeMismatch: "The informed phone number is not valid."
    },
    subject: {
        valueMissing: "The subject field must not be empty.",
    }
}

//this anonymous function contains the error messages for the specific types of error of each field

function showErrorMessage(inputType, input) {
    var errorMessage = ""

    errorTypes.forEach(error => {
        if (input.validity[error]) {
            errorMessage = errorMessages[inputType][error]
        }
    })

    console.log(errorMessage)

    return errorMessage

}

//this function receives the inputtype from the dataset and also the typed input. if there are any errors, it will choose the specified error message for the specified input type using the "errormessages" function

//below here are the validation functions

function validateFullName(input) {
    var field = document.querySelector("#fullName");
    const name = field.value
    const trimmed = name.trim();

    if (trimmed != name) {
        field.value = trimmed;
    }

    if (!trimmed == name) {
        input.setCustomValidity('The field must not be empty.')
    }
}


function validatePhoneNumber(input) {
    var field = document.querySelector("#phoneNumber");

    if (field == "") {
        input.setCustomValidity('The field must not be empty.')
    }
}

function validateSubject(input) {
    var field = document.querySelector("#subject");

    if (field == "") {
        input.setCustomValidity('The field must not be empty.')
    }

}



function validateEmailAddress(input) {
    //console.log(emailAddress.validity);
}
/*
TODO :
add error messages to specified error types

block form submission if there are errors
*/
