
function housefunction() {
    let house = document.getElementById("house-input").value;
    let enterhouse;
    if (house == enter ) {
        enterhouse = "Welcome to the house";
}
    else if (house == knock) {
            enterhouse= "Wait a minute";
}
    else {
        enterhouse = "No one is home";
    }
    document.getElementById("houseid").innerHTML = enterhouse;
}



