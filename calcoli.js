var a, b, temp, ris, prevOp;
var $keyValue = '';
temp = '';
a = 0;


function display(num) {
    $('#ris').text(num);
}

function updateTemp(val) {
    temp = temp + '' + val;
    display(temp);
}

function eseguiOp() {
    if (a != 0) {
        if (parseFloat(temp)) {
            b = parseFloat(temp);
            switch (prevOp) {
                case 'somma':
                    ris = a + b;
                    break;
                case 'sottrai':
                    ris = a - b;
                    break;
                case 'moltiplica':
                    ris = a * b;
                    break;
                case 'dividi':
                    ris = a / b;
                    break;
            }
            display(ris);
            a = ris;
            prevOp = $keyValue;
            temp = '';
        } else {
            prevOp = $keyValue;
        }
    } else {
        a = parseFloat(temp);
        display(a)
        prevOp = $keyValue;
        temp = '';
    }
}

function special(val) {
    switch (val) {
        case 'cancella':
            temp = '';
            display(a);
            break;
        case 'reset':
            temp = '';
            a = 0;
            prevOp = '';
            display(temp);
            break;
        case 'uguale':
            eseguiOp();
            a = ris;
            prevOp = '';
            temp = '';
            break;
    }
}

$('#pad-grid').on('click', function (event) {
    var $keyPressed = $(event.target).parent();
    $keyValue = $keyPressed.attr('value');

    if ($keyPressed.hasClass('number')) {
        updateTemp($keyValue);
    } else if ($keyPressed.hasClass('operation')) {
        eseguiOp();
    } else {
        special($keyValue);
    }
})