var a, b, temp, ris, prevOp, notFirst;
var $keyValue = '';
temp = '';
a = 0;
notFirst = false;

// Display the number
function display(num) {
    var risultato ='<h2 id="ris" class="risultato">' + num + '</h2>'
    console.log(risultato);
    $('.display').html(risultato);
}
// Create the temp number
function updateTemp(val) {
    temp = temp + '' + val;
    display(temp);
}

function eseguiOp() {
    if (notFirst) {                              // Is not the first basic input
        // Manage situation after a Delete Press
        if (parseFloat(temp)) {                 // User changed only the temp value
            b = parseFloat(temp);               // Parse and store the second value
            switch (prevOp) {                   // Do math
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
            display(ris);                       // Display result
            a = ris;                            // Store result as first value
            prevOp = $keyValue;                 // Store the next op
            temp = '';                          // Prepare the temp to new value
        } else {
            prevOp = $keyValue;                 // Update the operation after a delete
        }
    } else {                                    // It's the first operation
        notFirst = true;                        // It WAS the first operation
        a = parseFloat(temp);                   // Parse and store the tamp value
        prevOp = $keyValue;                     // Store the operation for the next value
        temp = '';                              // Prepare the temp to new value
        display(a)                              // Display the number
        
    }
}

// Special Keys
function special(val) {
    switch (val) {
        // Delete
        case 'del':                        // Delete only the temp (if user changes the op is handeled by eseguiOp)
            temp = '';                          // Prepare the temp to new value
            display(a);                         // Display the first value
            break;
        // Reset
        case 'reset':                           // Total Reset
            temp = '';
            a = 0;
            prevOp = '';
            notFirst = false;
            display(temp);
            break;
            // Equal to
        case 'uguale':
            if (notFirst && temp) {             // It should not be the first operation added and we should already have a temporary number stored
                eseguiOp();
                a = ris;
                prevOp = '';
                temp = '';
                break;
            }                                   // ????? Should I add a else with break ?????
    }
}

$('#pad-grid').on('click', function (event) {
    var $keyPressed = $(event.target);
    $keyValue = $keyPressed.attr('data-value');
    if ($keyPressed.hasClass('number')) {                       // Number keypad pressed
        updateTemp($keyValue);
    } else if ($keyPressed.hasClass('operation')) {             // Operation pressed
        eseguiOp();
    } else if ($keyPressed.hasClass('special')) {               // Special pressed
        special($keyValue);
    }
})

/* ---------- TOGGLER --------*/
var wrapper = document.getElementsByTagName('body')[0];
var toggler = document.getElementById('toggler');

function changeTheme(e) {
    var style, target;
    target = e.target;
    if(target.hasAttribute('id')) {
        style = target.getAttribute('id');
        wrapper.className = style;
        console.log(wrapper.className);
    }  
    
}

toggler.addEventListener('click', function(e){
    changeTheme(e);
});

/* ---------- END TOGGLER --------*/



