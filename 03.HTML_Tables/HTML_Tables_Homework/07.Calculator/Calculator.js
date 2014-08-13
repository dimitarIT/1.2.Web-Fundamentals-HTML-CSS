function calculate(input) {
    var display = document.getElementById('display').value;
    switch(input) {
        case "clear": display = ""; break;
        case "=": display = eval(display); break;
        default: display += input; break;
    }
    document.getElementById('display').value = display;
}
function searchKeyPress(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        calculate('=');
    }
}/**
 * Created by Dimitar on 09.06.2014 г..
 */
