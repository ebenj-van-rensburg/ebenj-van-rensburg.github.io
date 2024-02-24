let customCar = {
    make: "",
    model: "",
    color: "",
    year: "",
    bodyStyle: "",
    price: ""
},
    customSelections = {
    makes: ["Froud", "Troyoda", "WMB", "Ground-Roller"],
    models: ["Tyrant", "Crawler", "Bruiser", "Cydster", "High-rise", "COil"],
    colors: ["yellow", "red", "blue", "white"],
    years: ["1934", "1987", "1996", "2001"],
    bodies: ["truck", "coupe", "speedster", "cruiser"],
    pricing: ["3,550", "5,500", "15,750", "22,250"]
};

customCar.make = getSelection(customSelections.makes);
customCar.model = getSelection(customSelections.models);
customCar.color = getSelection(customSelections.colors);
customCar.year = getSelection(customSelections.years);
customCar.bodyStyle = getSelection(customSelections.bodies);
customCar.price = getSelection(customSelections.pricing);

document.getElementById("modelyear").innerHTML = customCar.year +" "+ customCar.model +" "+ customCar.make;
document.getElementById("pricetag").innerHTML = customCar.price

switch (customCar.bodyStyle) {
    case "truck":
        document.getElementById("cab").style = "position: absolute; width: 15%; height: 10%; top: 10%; left: 40%; background-color: " + customCar.color + ";"
        document.getElementById("bonnet").style = "position: absolute; width: 12%; height: 7%; top: 13%; left: 50%; background-color: " + customCar.color + ";"
        document.getElementById("boot").style = "position: absolute; width: 15%; height: 6.5%; top: 13.5%; left: 25%; background-color: " + customCar.color + ";"
        break;
    case "coupe":
        document.getElementById("cab").style = "position: absolute; width: 18%; height: 14%; top: 8%; left: 35%; background-color: " + customCar.color + ";"
        document.getElementById("bonnet").style = "position: absolute; width: 12%; height: 9%; top: 12%; left: 53%; background-color: " + customCar.color + ";"
        document.getElementById("boot").style = "position: absolute; width: 15%; height: 9%; top: 12%; left: 28%; background-color: " + customCar.color + ";"
        break;
    case "speedster":
        document.getElementById("cab").style = "position: absolute; width: 16%; height: 11%; top: 10%; left: 35%; background-color: " + customCar.color + ";"
        document.getElementById("bonnet").style = "position: absolute; width: 12%; height: 9%; top: 12%; left: 50%; background-color: " + customCar.color + ";"
        document.getElementById("boot").style = "position: absolute; width: 15%; height: 9%; top: 12%; left: 30%; background-color: " + customCar.color + ";"
        break;
    case "cruiser":
        document.getElementById("cab").style = "position: absolute; width: 10%; height: 13%; top: 7%; left: 43%; background-color: " + customCar.color + ";"
        document.getElementById("bonnet").style = "position: absolute; width: 12%; height: 8%; top: 12%; left: 50%; background-color: " + customCar.color + ";"
        document.getElementById("boot").style = "position: absolute; width: 15%; height: 13%; top: 7%; left: 30%; background-color: " + customCar.color + ";"
        break;
    default:
        break;
}

function getSelection(array) {
    return array[Math.floor(Math.random() * array.length)];
}
