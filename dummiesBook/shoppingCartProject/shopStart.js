let nums = [1, 2, 3, 4],
    items = ["Coke", "Kit Kat", "Bar One", "Fanta"],
    prices = [7.5, 9.5, 8.5, 7.5],
    quantities = [0, 0, 0, 0],
    totals = [0.0, 0.0, 0.0, 0.0],
    totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x]++;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    console.log(x);
    if (quantities[x] > 0) {
        quantities[x]--;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
    }
    display_all();
}

function display_all() {
    let myTable = "<table><th style='width: 100px; color: rgb(226, 255, 253); text-align: right;'>Num</th>";
        myTable += "<th style='width: 100px; color: rgb(226, 255, 253); text-align: right;'>Item</th>";
        myTable += "<th style='width: 100px; color: rgb(226, 255, 253); text-align: right;'>Price</th>";
        myTable += "<th style='width: 100px; color: rgb(226, 255, 253); text-align: right;'>Quantity</th>";
        myTable += "<th style='width: 100px; color: rgb(226, 255, 253); text-align: right;'>Total</th>";
        myTable += "<th style='width: 100px; color: rgb(226, 255, 253); text-align: right;'>Add</th>";
        myTable += "<th style='width: 100px; color: rgb(226, 255, 253); text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += `<tr><td style='width: 100px; text-align: right;'>${nums[i]}</td>`;
        myTable += `<td style='width: 100px; text-align: right;'>${items[i]}</td>`;
        myTable += `<td style='width: 100px; text-align: right;'>${prices[i]}</td>`;
        myTable += `<td style='width: 100px; text-align: right;'>${quantities[i]}</td>`;
        myTable += `<td style='width: 100px; text-align: right;'>${totals[i]}</td>`;
        myTable += `<td style='width: 100px; text-align: right;'><button onclick='add_selection(${i})'>Add</button></td>`;
        myTable += `<td style='width: 100px; text-align: right;'><button onclick='remove_selection(${i})'>Remove</button></td>`;
    }

    myTable += "</table>";
    myTable += `<br/><br/><p>Total: R${totalOrderAmt}`;
    myTable += "<p><button onclick='total_selection()'>Checkout</button></p>";

    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;
}

function total_selection() {
    totalOrderAmt = `Your total order comes to: R${totalOrderAmt}`
    // document.write(totalOrderAmt);
    document.getElementById("total").innerHTML = totalOrderAmt;
}

window.onload = function() {
    display_all();
}