var screen = document.getElementById('screen');

function btnClick(value){               //namukk screenil oroo button
    screen.value += value;
}

//AC BUTTON
function allClear(){
    screen.value = "";
}

//= BUTTON
function findResult(){
    var result = eval(screen.value)           //result is just a variable,we introduced here.
    screen.value = result;
}                                       //in short we can also write  screen.value=eval(screen.value)

// C BUTTON

function clearScreen(){
    screen.value=screen.value.slice(0,-1)
}