// validation for item
const ITEM_CODE_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z ]{3,}$/;
const ITEM_PRICE_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;
const ITEM_QTY_REGEX = /^[0-9]+$/;

//add validations and text fields to the array
let i_vArray = new Array();
i_vArray.push({field: $("#itemCode1"), regEx: ITEM_CODE_REGEX});
i_vArray.push({field: $("#itemName1"), regEx: ITEM_NAME_REGEX});
i_vArray.push({field: $("#price"), regEx: ITEM_PRICE_REGEX});
i_vArray.push({field: $("#qty"), regEx: ITEM_QTY_REGEX});

function clearItemInputFields() {
    $("#itemCode1,#itemName1,#price,#qty").val("");
    $("#itemCode1,#itemName1,#price,#qty").css("border", "1px solid #ced4da");
    $("#itemCode").focus();
}

/*disable press tab*/
$("#itemCode1,#itemName1,#price,#qty").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});