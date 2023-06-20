/*---------------------------customer section--------------------------------------------------------------*/



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





