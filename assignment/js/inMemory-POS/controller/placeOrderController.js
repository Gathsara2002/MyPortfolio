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

/*set order detail to table*/
$("#btnCart").click(function () {
    saveOrderDetails();
});

let buyQty = 0;
let total = 0;
let unitPrice = 0;

/*add details to order table*/
function saveOrderDetails() {
    let code = $("#itemCode").val();
    let name = $("#itemName").val();
    let price = $("#unitPrice").val();
    let qty = $("#buyQrt").val();

    buyQty = parseInt(qty);
    unitPrice = parseFloat(price);
    total = buyQty * unitPrice;

    let newOrder = Object.assign({}, placeOrder);
    newOrder.itemCode = code;
    newOrder.itemName = name;
    newOrder.itemPrice = price;
    newOrder.qty = qty;
    newOrder.total = total;

    placeOrderDB.push(newOrder);
    getAllOrders();
    clearFields();
}

function getAllOrders() {

    $("#orderTable").empty();

    for (let i = 0; i < placeOrderDB.length; i++) {
        let code = placeOrderDB[i].itemCode;
        let name = placeOrderDB[i].itemName;
        let price = placeOrderDB[i].itemPrice;
        let qty = placeOrderDB[i].qty;
        let total = placeOrderDB[i].total;

        let trow = `<tr>
            <td>${code}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${qty}</td>
            <td>${total}</td>
        </tr>`;

        $("#orderTable").append(trow);

    }

}

function clearFields() {
    $("#itemCode,#itemName,#unitPrice,#buyQrt").val("");
}

