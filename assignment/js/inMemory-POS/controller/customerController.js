/*get existing customers*/
getAllCustomer();

/*add customer to table*/
/*bind event to save customer*/
$("#btnSaveCustomer").click(function () {
    saveCustomer();
});

/*get all customers*/
$("#btnGetAllCustomers").click(function () {
    getAllCustomer();
});

/*delete customer*/
$("#btnDeleteCustomer").click(function () {
    let id = $("#customerId").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomer();
        } else {
            alert("Customer Not Removed..!");
        }
    }

});

/*update customer*/
$("#btnUpdateCustomer").click(function () {
    let id = $("#customerId").val();
    updateCustomer(id);
    clearCustomerInputFields();
});


/*crud operation functions*/

/*save customer function*/
function saveCustomer() {
    let id = $("#customerId").val();
    //check customer is exists or not?
    if (searchCustomer(id.trim()) === undefined) {

        //if the customer is not available then add him to the array
        let name = $("#customerName").val();
        let address = $("#addressCus").val();
        let tel = $("#tpNo").val();

        //by using this one we can create a new object using
        //the customer model with same properties
        let newCustomer = Object.assign({}, customer);
        newCustomer.cusId = id;
        newCustomer.cusName = name;
        newCustomer.cusAddress = address;
        newCustomer.cusTele = tel;

        //add customer record to the customer array (DB)
        cusDB.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomer();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

/*get all customer function*/
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
        bindEventToCustomer();
    }
}

/*search customer function*/
function searchCustomer(id) {
    return cusDB.find(function (customer) {
        //if the search id match with customer record
        //then return that object
        return customer.cusId === id;
    });
}

/*delete customer function*/
function deleteCustomer(id) {
    for (let i = 0; i < cusDB.length; i++) {
        if (cusDB[i].cusId === id) {
            cusDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

/*update customer function*/
function updateCustomer(id) {
    if (searchCustomer(id) === undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            //if the customer available can we update.?

            let customerName = $("#customerName").val();
            let customerAddress = $("#addressCus").val();
            let customerTp = $("#tpNo").val();

            customer.cusName = customerName;
            customer.cusAddress = customerAddress;
            customer.cusTele = customerTp;

            getAllCustomer();
        }
    }

}

/*bind events to table*/
function bindEventToCustomer() {
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

