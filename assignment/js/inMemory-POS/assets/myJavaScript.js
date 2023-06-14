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
});

/*add customer to table*/
/*bind event to save customer*/

let cusDB = [];

$("#btnSaveCustomer").click(function () {

    /*get customer details from input fields*/
    let name = $("#customerName").val();
    let address = $("#addressCus").val();
    let nic = $("#nicCus").val();
    let tel = $("#tpNo").val();

    /*create new row*/
    //let tRow = "<tr>" + "<td>" + name + "</td>" + "<td>" + address + "</td>" + "<td>" + nic + "</td>" + "<td>" + tel + "</td>" + "</tr>";

    /*append to tbody*/
    // $("#tblCustomer").append(tRow);

    /*--------------------------------------------------------------------------------------------------------*/
    /*using array*/

    //let cusArray = [name, address, nic, tel];

    //customer object
    let customer = {
        cusName: name,
        cusAddress: address,
        cusNic: nic,
        cusTele: tel
    }

    cusDB.push(customer);

    /*let row = `<tr>
        <td>${cusArray[0]}</td>
        <td>${cusArray[1]}</td>
        <td>${cusArray[2]}</td>
        <td>${cusArray[3]}</td>
        </tr>`;

    $("#tblCustomer").append(row);*/

});


/*get all customers*/
$("#btnGetAllCustomers").click(function () {

    //clear table data
    $("#tblCustomer").empty();

    for (let i = 0; i < cusDB.length; i++) {
        let name = cusDB[i].cusName;
        let address = cusDB[i].cusAddress;
        let nic = cusDB[i].cusNic;
        let tel = cusDB[i].cusTele;

        let row = `<tr>
        <td>${name}</td>
        <td>${address}</td>
        <td>${nic}</td>
        <td>${tel}</td>
        </tr>`;

        $("#tblCustomer").append(row);

    }
});


/*add item to table*/
$("#btnSaveItem").click(function () {

    /*get item details from input fields*/
    let code = $("#itemCode1").val();
    let name = $("#itemName1").val();
    let price = $("#price").val();
    let qty = $("#qty").val();

    /*create new row*/
    let tRow = ` <tr>
    <td>${code}</td>
    <td>${name}</td>
    <td>${price}</td>
    <td>${qty}</td>
    </tr>`;

});

/*load customer details to place order form*/

/*set customer name to combo box*/
function loadCustomerDetails(){
    for (let i = 0; i < cusDB.length; i++) {
        let name=cusDB[i].cusName;
        $("#cusId").append(`<option>${name}</option>`);
    }
}


