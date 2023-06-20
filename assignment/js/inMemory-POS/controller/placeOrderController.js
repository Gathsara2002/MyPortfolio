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

    let cid = $("#cusId").val();

    for (let i = 0; i < cusDB.length; i++) {
        if (cid === cusDB[i].cusId) {
            let address = cusDB[i].cusAddress;
            let name = cusDB[i].cusName;
            let tel = cusDB[i].cusTele;

            //set values
            $("#cId").val(cid);
            $("#cusName").val(name);
            $("#address").val(address);
            $("#cusContact").val(tel);
        }
    }
});
