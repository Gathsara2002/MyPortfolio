// validation for item
const ITEM_CODE_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z ]{3,}$/;
const ITEM_PRICE_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;
const ITEM_QTY_REGEX = /^[0-9]+$/;

//add validations and text fields to the array
let i_vArray = new Array();
i_vArray.push({field: $("#itemCode1"), regEx: ITEM_CODE_REGEX, error: 'Item Code Pattern Is Wrong : I00-001'});
i_vArray.push({
    field: $("#itemName1"), regEx: ITEM_NAME_REGEX, error: 'Item Name Pattern Is Wrong : A-z 0-9 Ex: Naadu'
});
i_vArray.push({field: $("#price"), regEx: ITEM_PRICE_REGEX, error: 'Item Price Pattern Is Wrong : 100 or 100.00'});
i_vArray.push({field: $("#qty"), regEx: ITEM_QTY_REGEX, error: 'Item Quantity Pattern Is Wrong : 0-9'});

function clearItemInputFields() {
    $("#itemCode1,#itemName1,#price,#qty").val("");
    $("#itemCode1,#itemName1,#price,#qty").css("border", "1px solid #ced4da");
    $("#itemCode").focus();
}

/*disable press tab*/
$("#itemCode1,#itemName1,#price,#qty").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

$("#itemCode1,#itemName1,#price,#qty").keyup(function (e) {
    checkItemValidity();
});

/*move with enter*/
$("#itemCode1").keydown(function (e) {
    if (e.key === "Enter" && itemCheck(ITEM_CODE_REGEX, $("#itemCode1"))) {
        $("#itemName1").focus();
    } else {
        $("#itemCode1").focus();
    }
});

$("#itemName1").keydown(function (e) {
    if (e.key === "Enter" && itemCheck(ITEM_NAME_REGEX, $("#itemName1"))) {
        $("#price").focus();
    } else {
        $("#itemName1").focus();
    }
});

$("#price").keydown(function (e) {
    if (e.key === "Enter" && itemCheck(ITEM_PRICE_REGEX, $("#price"))) {
        $("#qty").focus();
    } else {
        $("#price").focus();
    }
});

$("#qty").keydown(function (e) {
    if (e.key === "Enter" && itemCheck(ITEM_QTY_REGEX, $("#qty"))) {
        $("#btnSaveItem").focus();
    } else {
        $("#qty").focus();
    }
});


/*check validation method*/
function checkItemValidity() {
    let itemErrorCount = 0;
    for (let itemValidation of i_vArray) {
        if (itemCheck(itemValidation.regEx, itemValidation.field)) {
            textItemSuccess(itemValidation.field, "");
        } else {
            itemErrorCount = itemErrorCount + 1;
            setItemTextError(itemValidation.field, itemValidation.error);
        }
    }
    setItemButtonState(itemErrorCount);
}

function setItemButtonState(itemErrorCount) {
    if (itemErrorCount > 0) {
        $("#btnSaveItem").attr('disabled', true);
    } else {
        $("#btnSaveItem").attr('disabled', false);
    }
}

/*check input value*/
function itemCheck(regEx, field) {
    let itemInputValue = field.val();
    return regEx.test(itemInputValue) ? true : false;
}

function textItemSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('small').text(error);
    }
}


function setItemTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('small').text(error);
    }
}

function defaultItemText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('small').text(error);
}

