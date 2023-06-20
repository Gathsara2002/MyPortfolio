/*---------------------------customer section--------------------------------------------------------------*/


// load customer details to place order form
/*set customer name to combo box*/
function loadCustomerDetails() {

    //clear combo box
    $("#cusId").empty();

    for (let i = 0; i < cusDB.length; i++) {
        let id = cusDB[i].cusId;
        $("#cusId").append(`<option>${id}</option>`);
    }
}


/*set customer detail when combo box click*/
$("#cusId").click(function () {

    let cusName = $("#cusId").val();

    for (let i = 0; i < cusDB.length; i++) {
        if (cusName === cusDB[i].cusId) {
            let address = cusDB[i].cusAddress;
            let name = cusDB[i].cusName;
            let tel = cusDB[i].cusTele;

            //set values
            $("#nic").val(nic);
            $("#cusName").val(cusName);
            $("#address").val(address);
            $("#cusContact").val(tel);
        }
    }
});


/*move with enter*/
$("#customerId").keydown(function (e) {

    if (e.key === "Enter") {
        let idRegex = /^(C00-)[0-9]{3}$/;
        let id = $("#customerId").val();
        let isIdMatch = idRegex.test(id);
        if (isIdMatch) {
            $("#customerName").focus();
        } else {
            alert("Invalid Customer Id ! ");
        }
    }
});

$("#customerName").keydown(function (e) {

    if (e.key === "Enter") {
        let nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        let name = $("#customerName").val();
        let isNameMatch = nameRegex.test(name);
        if (isNameMatch) {
            $("#addressCus").focus();
        } else {
            alert("Invalid Customer Name ! ");
        }
    }
});

$("#addressCus").keydown(function (e) {

    if (e.key === "Enter") {
        let addressRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        let address = $("#addressCus").val();
        let isAddressMatch = addressRegex.test(address);
        if (isAddressMatch) {
            $("#tpNo").focus();
        } else {
            alert("Invalid Customer Address ! ");
        }
    }
});

$("#tpNo").keydown(function (e) {
    if (e.key === "Enter") {
        let tpRegex = /^(0)[0-9]{9}/;
        let tel = $("#tpNo").val();
        let isTpMatch = tpRegex.test(tel);
        if (isTpMatch) {
            $("#btnSaveCustomer").focus();
        } else {
            alert("Invalid Telephone number  ! ");
        }
    }
});


/*--------------------------------------------- item section----------------------------------------------------------*/

//load item details to place order form
/*set item code to combo box*/
function loadItemDetails() {

    //clear combo box
    $("#itemCode").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].itemCode;
        $("#itemCode").append(`<option>${code}</option>`);
    }
}


/*set item detail when combo box click*/
$("#itemCode").click(function () {

    let itemCode = $("#itemCode").val();

    for (let i = 0; i < itemDB.length; i++) {
        if (itemCode === itemDB[i].itemCode) {
            let name = itemDB[i].itemName;
            let price = itemDB[i].itemPrice;
            let qty = itemDB[i].itemQty;

            //set values
            $("#itemCode").val(itemCode);
            $("#itemName").val(name);
            $("#unitPrice").val(price);
            $("#qtyOnHand").val(qty);
        }
    }
});





