var temp = '';
var a = '';
var el = document.getElementById("ris");
var primo = true;
var prossOp = '';
var chiuso = false;

/*
function ik(val) { 
    if(val){
        temp = temp + "" + val;
        el.textContent = temp;
    }    
}

function somma() {
    a = parseInt(a) + parseInt(temp);
    temp = '';
    el.textContent = a;
}

*/

function consolla() {
    console.log('Temp: ' + temp);
    console.log('Ris: ' + a);
    console.log('Op: ' + prossOp);
}


// Display value in rsult test area
function display(valore) {
    el.textContent = valore;
}
// Delete
function cancella() {
    if (temp != '') {
        temp = '';
        display(a);
    }
}
//reset
function resetta() {
    temp = '';
    a = 0;
    primo = true;
    prossOp = '';
    chiuso = false;
    display(temp);
}

//=
function chiudi() {
    if (a && temp && prossOp) {
        a = eseguiOp(a, temp, prossOp);
        prossOp = '';
        display(a);
        temp = '';
        chiuso = true;
    }
}

// Operations
function eseguiOp(x, y, operando) {
    y = parseFloat(y);
    if (operando === 'somma') {
        x = x + y;
        return x;
    }
    if (operando === 'dividi') {
        x = x / y;
        return x;
    }
    if (operando === 'moltiplica') {
        x = x * y;
        return x;
    }
    if (operando === 'sottrai') {
        x = x - y;
        return x;
    }
    prossOp = operando;
}

// Number pad
function ik(val) {
    if (val || val === 0) {
        if(chiuso) {
            resetta();
            temp = temp + "" + temp;
        };
        temp = temp + "" + val;
        display(temp);
    }
}

// OPeration pad
function operazione(op) {
    if (primo) {
        primo = false;
        prossOp = op;
        a = parseFloat(temp);
        cancella();
    } else if (temp != '' && prossOp != '') {
        a = eseguiOp(a, temp, prossOp);
        prossOp = op;
        cancella();
    } else {
        prossOp = op;
        chiuso = false;
    }
}