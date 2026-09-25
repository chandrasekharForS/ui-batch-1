document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let color = document.getElementById("color").value.toLowerCase();

    let message = "";
    message = "Hello " + name + ",";
    // 0 - 17 -- Minor
    // 18 - 59 -- Adult
    // >= 60 -- Senior Citizen

    if(age > 0 && age < 18) {
        message += " you are a minor."
    }
    else if(age >= 18 && age < 60) {
        message += " you are an adult."
    }
    else if(age >= 60) {
        message += " you are a senior citizen."
    }

    switch(color){
        case "red": 
            message += "Your favourite color is " + color;
            break;
        case "green": 
            message += "Your favourite color is " + color;
            break;
        case "blue": 
            message += "Your favourite color is " + color;
            break;
        default:
            message += "Your have an interesting favourite color " + color;
    }
    

    document.getElementById("message").innerText = message;

});