// validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_TEL_REGEX = /^[0-9]{2,}$/;

//add validations and text fields to the array
let c_vArray = new Array();
c_vArray.push({field: $("#customerId"), regEx: CUS_ID_REGEX});
c_vArray.push({field: $("#customerName"), regEx: CUS_NAME_REGEX});
c_vArray.push({field: $("#addressCus"), regEx: CUS_ADDRESS_REGEX});
c_vArray.push({field: $("#tpNo"), regEx: CUS_TEL_REGEX});

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
