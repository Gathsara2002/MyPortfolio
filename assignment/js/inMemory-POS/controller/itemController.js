/*to get existing items*/
getAllItems();

/*add event to getAll Items Btn*/
$("#btnGetAllItems").click(function () {
    getAllItems();
});

/*add item to table*/
$("#btnSaveItem").click(function () {
    saveItem();
});

/*delete item*/
$("#btnDeleteItem").click(function () {
    let code = $("#itemCode1").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(code);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItems();
        } else {
            alert("Item Not Removed..!");
        }
    }
});

/*update item*/
$("#btnUpdateItem").click(function () {
    let code = $("#itemCode1").val();
    updateItem(code);
    clearItemInputFields();
});




/*save item function*/
function saveItem() {
    let code = $("#itemCode1").val();

    if (searchItem(code.trim()) === undefined) {

        let name = $("#itemName1").val();
        let price = $("#price").val();
        let qty = $("#qty").val();

        let newItem = Object.assign({}, item);
        newItem.itemCode = code;
        newItem.itemName = name;
        newItem.itemPrice = price;
        newItem.itemQty = qty;

        itemDB.push(newItem);
        clearItemInputFields();
        getAllItems();

    } else {
        alert("Item already exits.!");
        clearItemInputFields();
    }
}

/*search item function*/
function searchItem(code) {
    return itemDB.find(function (item) {
        return item.itemCode === code;
    });
}

/*get all items function*/
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

/*delete item function*/
function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].itemCode === code) {
            itemDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

/*update item function*/
function updateItem(code) {
    if (searchItem(code) === undefined) {
        alert("No such Item..please check the Item Code");
    } else {
        let consent = confirm("Do you really want to update this item.?");
        if (consent) {
            let item = searchItem(code);

            let itemName = $("#itemName1").val();
            let itemPrice = $("#price").val();
            let itemQty = $("#qty").val();

            item.itemName = itemName;
            item.itemPrice = itemPrice;
            item.itemQty = itemQty;

            getAllItems();
        }
    }

}

/*bind events to table*/
function bindEventToItem() {

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