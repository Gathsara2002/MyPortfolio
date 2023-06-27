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
    findTotal();
    $("#total").val(payTot);
});

/*display sub total after press enter*/
$("#discount").keydown(function (e) {
    if (e.key === "Enter") {
        findSubTotal();
    }
});

/*display balance*/
$("#cash").keydown(function (e) {
    if (e.key === "Enter") {
        findBalance();
    }
});

/*purchase function*/
$("#btnPurchase").click(function () {
    updateItemInPO();
    clearFields();
    $("#orderTable").empty();
    //if placeOrder array not empty.every time previous order details automatically adds to order table
    placeOrderDB = [];
    alert("Order complete !");
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
    //clearFields();
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
    $("#itemName,#unitPrice,#buyQrt,#qtyOnHand,#total,#subTotal,#cash,#balance,#date,#orderId,#cId,#cusName,#address,#cusContact").val("");
    $("#discount").val('0');
}

/*to find and display total in payments details*/
let payTot = 0;

function findTotal() {
    payTot = 0;
    for (let i = 0; i < placeOrderDB.length; i++) {
        payTot += placeOrderDB[i].total;
    }
}

/*find sub total after discount*/
function findSubTotal() {

    let discount = $("#discount").val();

    if (discount === '0') {
        let val = $("#total").val();
        $("#subTotal").val(val);
    } else {
        let dis = parseInt(discount);
        let value = payTot * dis / 100;
        let subTot = payTot - value;
        $("#subTotal").val(subTot);
    }
}

/*find balance method*/
function findBalance() {
    let cash = $("#cash").val();
    let subTot = $("#subTotal").val();

    let val1 = parseInt(cash);
    let val2 = parseInt(subTot);

    let balance = val1 - val2;

    $("#balance").val(balance);
}

/*update item qty method*/
function updateItemInPO() {
    let qtyOnHand = $("#qtyOnHand").val();
    let buyQty = $("#buyQrt").val();
    let code = $("#itemCode").val();

    let val1 = parseInt(qtyOnHand);
    let val2 = parseInt(buyQty);

    let newQty = val1 - val2;

    updateItemQty(code, newQty);
}

/*update item function*/
function updateItemQty(code, qty) {
    let item1 = searchItem(code);
    let itemName = $("#itemName").val();
    let itemPrice = $("#unitPrice").val();

    item1.itemName = itemName;
    item1.itemPrice = itemPrice;
    item1.itemQty = qty;

    getAllItems();
}
