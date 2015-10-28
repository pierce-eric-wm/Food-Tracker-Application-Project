//add numbers counting up to number the products
function newRow() {
    var table = document.getElementById("container2");
    var row = table.insertRow(0);
    var cell1 = row.insertRow(0);
    var cell2 = row.insertRow(1);
    var cell3 = row.insertRow(2);
    var cell4 = row.insertRow(3);
    var number = document.getElementById("number").value;
    var newConent = document.CreateTextNode(number);
    cell1.appendChild(newContent);
    //next
    var foodName = document.getElementById("foodName").value;
    var newConent2 = document.CreateTextNode(foodName);
    cell2.appendChild(newContent2);
    //next
    var purchaseDate = document.getElementById("purchase").value;
    var newConent3 = document.CreateTextNode(purchase);
    cell3.appendChild(newContent3);
    //next
    var expDate = document.getElementById("expiration").value;
    var newConent4 = document.CreateTextNode(expiration);
    cell4.appendChild(newContent4);
    //next
}