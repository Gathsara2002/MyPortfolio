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
});

/*add customer to table*/
/*bind event to save customer*/
$("#btnSaveCustomer").click(function () {

    /*get customer details from input fields*/
    let name = $("#customerName").val();
    let address = $("#addressCus").val();
    let nic = $("#nicCus").val();
    let tel = $("#tpNo").val();

    /*create new row*/
    let tRow = "<tr>" + "<td>" + name + "</td>" + "<td>" + address + "</td>" + "<td>" + nic + "</td>" + "<td>" + tel + "</td>" + "</tr>";

    /*append to tbody*/
    $("#tblCustomer").append(tRow);
});


/*add item to table*/
$("#btnSaveItem").click(function () {

    /*get item details from input fields*/
    let code = $("#itemCode1").val();
    let name = $("#itemName1").val();
    let price = $("#price").val();
    let qty = $("#qty").val();

    /*create new row*/
    let tRow = "<tr>" + "<td>" + code + "</td>" + "<td>" + name + "</td>" + "<td>" + price + "</td>" + "<td>" + qty + "</td>" + "</tr>";

    /*append to tbody*/
    $("#tblItem").append(tRow);
});


