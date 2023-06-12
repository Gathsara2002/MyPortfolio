/*clear input*/
$("#btn1").click(function () {
    $("#display").val("");
});


/*buttons*/
$("#btn2").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('7');
    } else {
        $("#display").val(output + '7');
    }

});

$("#btn3").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('8');
    } else {
        $("#display").val(output + '8');
    }
});

$("#btn4").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('9');
    } else {
        $("#display").val(output + '9');
    }
});

$("#btn6").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('4');
    } else {
        $("#display").val(output + '4');
    }
});

$("#btn7").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('5');
    } else {
        $("#display").val(output + '5');
    }
});

$("#btn8").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('6');
    } else {
        $("#display").val(output + '6');
    }

});

$("#btn10").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('3');
    } else {
        $("#display").val(output + '3');
    }
});

$("#btn11").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('2');
    } else {
        $("#display").val(output + '2');
    }
});

$("#btn12").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('1');
    } else {
        $("#display").val(output + '1');
    }
});

$("#btn14").click(function () {
    let output = $("#display").val();

    if (output === 0) {
        $("#display").val('0');
    } else {
        $("#display").val(output + '0');
    }
});


/*operators*/

let fValue = "";
let sValue = "";
let operator = "";
let result = 0;

/*addition*/
$("#btn5").click(function () {
    fValue = $("#display").val();
    operator = "addition";
    $("#display").val("");
});

/*minus*/
$("#btn9").click(function () {
    fValue = $("#display").val();
    operator = "minus";
    $("#display").val("");
});

/*multi*/
$("#btn17").click(function () {
    fValue = $("#display").val();
    operator = "multi";
    $("#display").val("");
});

/*divide*/
$("#btn13").click(function () {
    fValue = $("#display").val();
    operator = "divide";
    $("#display").val("");
});

/*calculation method*/
function calculate() {

    sValue = $("#display").val();

    if (operator === "addition") {
        result = parseInt(fValue) + parseInt(sValue);
        $("#display").val(result);
    }

    if (operator === "minus") {
        result = parseFloat(fValue) - parseFloat(sValue);
        $("#display").val(result);
    }

    if (operator === "multi") {
        result = parseInt(fValue) * parseInt(sValue);
        $("#display").val(result);
    }

    if (operator === "divide") {
        result = parseInt(fValue) / parseInt(sValue);
        $("#display").val(result);
    }
}

/*equal*/
$("#btn16").click(function () {
    calculate();
});
