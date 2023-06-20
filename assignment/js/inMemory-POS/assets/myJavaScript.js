document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("homePage").style.display = 'inline-block';
    document.getElementById("customerPage").style.display = 'none';
    document.getElementById("itemPage").style.display = 'none';
    document.getElementById("orderPage").style.display = 'none';
});

document.getElementById("home").addEventListener("click", function () {
    document.getElementById("homePage").style.display = 'block';
    document.getElementById("customerPage").style.display = 'none';
    document.getElementById("itemPage").style.display = 'none';
    document.getElementById("orderPage").style.display = 'none';
});

document.getElementById("items").addEventListener("click", function () {
    document.getElementById("homePage").style.display = 'none';
    document.getElementById("customerPage").style.display = 'none';
    document.getElementById("itemPage").style.display = 'block';
    document.getElementById("orderPage").style.display = 'none';
});

document.getElementById("customer").addEventListener("click", function () {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("customerPage").style.display = 'block';
    document.getElementById("itemPage").style.display = 'none';
    document.getElementById("orderPage").style.display = 'none';
});

document.getElementById("orders").addEventListener("click", function () {
    document.getElementById("homePage").style.display = 'none';
    document.getElementById("customerPage").style.display = 'none';
    document.getElementById("itemPage").style.display = 'none';
    document.getElementById("orderPage").style.display = 'block';
    loadCustomerDetails();
    loadItemDetails();
});


/*---------------------------customer section--------------------------------------------------------------*/
let cusDB = [];

//save customer
/*add customer to table*/
/*bind event to save customer*/
$("#btnSaveCustomer").click(function () {

    /*get customer details from input fields*/
    let id = $("#customerId").val();
    let name = $("#customerName").val();
    let address = $("#addressCus").val();
    let tel = $("#tpNo").val();

    if (searchCustomer(nic)) {
        alert("Customer already exists !")
    } else {
        let customer = {
            cusId: id,
            cusName: name,
            cusAddress: address,
            cusTele: tel
        }

        cusDB.push(customer);

        getAllCustomer();
        clearTextField();
    }

});


/*get all customers*/
$("#btnGetAllCustomers").click(function () {
    getAllCustomer();
});


function getAllCustomer() {
    //clear table data
    $("#tblCustomer").empty();

    for (let i = 0; i < cusDB.length; i++) {
        let id = cusDB[i].cusId;
        let name = cusDB[i].cusName;
        let address = cusDB[i].cusAddress;
        let tel = cusDB[i].cusTele;

        let row = `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${address}</td>
        <td>${tel}</td>
        </tr>`;

        $("#tblCustomer").append(row);

        /*invoke every time when new customer add to table*/
        bindEventtoCustomer();
    }
}


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


/*bind events to table*/
function bindEventtoCustomer() {
    /*get customer detail from table*/
    $("#tblCustomer>tr").click(function () {

        let col1 = $(this).children().eq(0).text();
        let col2 = $(this).children().eq(1).text();
        let col3 = $(this).children().eq(2).text();
        let col4 = $(this).children().eq(3).text();

        /*set values to input fields*/
        $("#customerId").val(col1);
        $("#customerName").val(col2);
        $("#addressCus").val(col3);
        $("#tpNo").val(col4);

    });
}


/*delete customer*/
$("#btnDeleteCustomer").click(function () {
    let id = $("#customerId").val();
    deleteCustomer(id);
    getAllCustomer();
    clearTextField();
});


function deleteCustomer(id) {
    for (let i = 0; i < cusDB.length; i++) {
        if (cusDB[i].cusId === id) {
            cusDB.splice(i, 1);
        }
    }
}


/*update customer*/
$("#btnUpdateCustomer").click(function () {

    let id = $("#customerId").val();
    let name = $("#customerName").val();
    let address = $("#addressCus").val();
    let tel = $("#tpNo").val();

    deleteCustomer(id);

    let customer = {
        cusId: id,
        cusName: name,
        cusAddress: address,
        cusTele: tel
    }

    cusDB.push(customer);

    getAllCustomer();
    clearTextField();

});


/*clear text fields and focus on first text field*/
function clearTextField() {
    $("#customerName").val("");
    $("#addressCus").val("");
    $("#customerId").val("");
    $("#tpNo").val("");

    $("#customerId").focus();
}


/*search customer*/
function searchCustomer(id) {
    return cusDB.find(function (customer) {
        //if the search id match with customer record
        //then return that object
        return customer.cusId === id;
    });
}


/*disable press tab*/
$("#customerName,#addressCus,#customerId,#tpNo").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
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
        let nameRegex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        let name = $("#customerName").val();
        let isNameMatch = nameRegex.test(name);
        if (isNameMatch) {
            $("#addressCus").focus();
        }else {
            alert("Invalid Customer Name ! ");
        }
    }
});

$("#addressCus").keydown(function (e) {

    if (e.key === "Enter") {
        let addressRegex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        let address = $("#addressCus").val();
        let isAddressMatch = addressRegex.test(address);
        if (isAddressMatch) {
            $("#tpNo").focus();
        }else{
            alert("Invalid Customer Address ! ");
        }
    }
});

$("#tpNo").keydown(function (e) {
    if (e.key === "Enter") {
        let tpRegex=/^(0)[0-9]{9}/;
        let tel = $("#tpNo").val();
        let isTpMatch = tpRegex.test(tel);
        if (isTpMatch) {
            $("#btnSaveCustomer").focus();
        }else{
            alert("Invalid Telephone number  ! ");
        }
    }
});


/*--------------------------------------------- item section----------------------------------------------------------*/

let itemDB = [];

/*add item to table*/
$("#btnSaveItem").click(function () {

    /*get item details from input fields*/
    let code = $("#itemCode1").val();
    let name = $("#itemName1").val();
    let price = $("#price").val();
    let qty = $("#qty").val();

    let itemObj = {
        itemCode: code,
        itemName: name,
        itemPrice: price,
        itemQty: qty
    }

    itemDB.push(itemObj);

    getAllItems();

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


function getAllItems() {
    $("#tblItem").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].itemCode;
        let name = itemDB[i].itemName;
        let price = itemDB[i].itemPrice;
        let qty = itemDB[i].itemQty;

        /*create new row*/
        let tRow = ` <tr>
        <td>${code}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${qty}</td>
        </tr>`;

        $("#tblItem").append(tRow);

        bindEventToItem();

    }
}


/*add event to getAll Items Btn*/
$("#btnGetAllItems").click(function () {
    getAllItems();
});


/*bind events to table*/
function bindEventToItem() {
    /*get customer detail from table*/
    $("#tblItem>tr").click(function () {

        let col1 = $(this).children().eq(0).text();
        let col2 = $(this).children().eq(1).text();
        let col3 = $(this).children().eq(2).text();
        let col4 = $(this).children().eq(3).text();

        /*set values to input fields*/
        $("#itemCode1").val(col1);
        $("#itemName1").val(col2);
        $("#price").val(col3);
        $("#qty").val(col4);

    });
}



