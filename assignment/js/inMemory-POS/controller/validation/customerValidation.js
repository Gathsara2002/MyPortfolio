// validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{4,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{5,}$/;
const CUS_TEL_REGEX = /^[0-9]{2,}$/;

//add validations and text fields to the array
let c_vArray = [];
c_vArray.push({field: $("#customerId"), regEx: CUS_ID_REGEX, error: 'Code Pattern Is Wrong : C00-001'});
c_vArray.push({field: $("#customerName"), regEx: CUS_NAME_REGEX, error: 'Name Pattern Is Wrong : A-z'});
c_vArray.push({field: $("#addressCus"), regEx: CUS_ADDRESS_REGEX, error: 'Address Pattern Is Wrong.'});
c_vArray.push({field: $("#tpNo"), regEx: CUS_TEL_REGEX, error: 'Contact Pattern Is Wrong.'});

//clear input field values
function clearCustomerInputFields() {
    $("#customerId,#customerName,#addressCus,#tpNo").val("");
    $("#customerId,#customerName,#addressCus,#tpNo").css("border", "1px solid #ced4da");
    $("#customerId").focus();
}

/*disable press tab*/
$("#customerName,#addressCus,#customerId,#tpNo").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

/*check validation while typing*/
$("#customerName,#addressCus,#customerId,#tpNo").keyup(function () {
    checkValidity();
});

/*move with enter*/
$("#customerId").keydown(function (e) {
    if (e.key === "Enter" && checkCustomer(CUS_ID_REGEX, $("#customerId"))) {
        $("#customerName").focus();
    } else {
        $("#customerId").focus();
    }
});

$("#customerName").keydown(function (e) {
    if (e.key === "Enter" && checkCustomer(CUS_NAME_REGEX, $("#customerName"))) {
        $("#addressCus").focus();
    } else {
        $("#customerName").focus();
    }
});

$("#addressCus").keydown(function (e) {
    if (e.key === "Enter" && checkCustomer(CUS_ADDRESS_REGEX, $("#addressCus"))) {
        $("#tpNo").focus();
    } else {
        $("#addressCus").focus();
    }
});

$("#tpNo").keydown(function (e) {
    if (e.key === "Enter" && checkCustomer(CUS_TEL_REGEX, $("#tpNo"))) {
        let res = confirm("Do you want to add this customer.?");
        if(res) {
            clearCustomerInputFields();
        }
    } else {
        $("#tpNo").focus();
    }
});


/*method to check validation*/
function checkValidity() {
    let errCount = 0;
    for (let validation of c_vArray) {
        if (checkCustomer(validation.regEx, validation.field)) {
            inputCusSuccess(validation.field, "");
        } else {
            errCount += 1;
            inputCusError(validation.field, validation.error);
        }
    }
    setCusBtnState(errCount);

}

/*check input value*/
function checkCustomer(regEx, field) {
    let inputValue = field.val();
    return regEx.test(inputValue) ? true : false;
}

/*if value correct*/
function inputCusSuccess(textField, error) {
    if (textField.val().length <= 0) {
        defaultCusText(textField, "");
    } else {
        textField.css('border', '2px solid green');
        textField.parent().children('small').text(error);
    }
}

/*if value wrong*/
function inputCusError(textField, error) {
    if (textField.val().length <= 0) {
        defaultCusText(textField, "");
    } else {
        textField.css('border', '2px solid red');
        textField.parent().children('small').text(error);
    }
}

/*set button status*/
function setCusBtnState(val) {
    if (val > 0) {
        $("#btnSaveCustomer").attr('disabled', true);
    } else {
        $("#btnSaveCustomer").attr('disabled', false);
    }
}

function defaultCusText(textField, error) {
    textField.css("border", "1px solid #ced4da");
    textField.parent().children('small').text(error);
}
