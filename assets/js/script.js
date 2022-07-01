let maryCount = 60;
let travisCount = 0;
let jungCount = 0;
let donnieCount = 0;

let rows = document.getElementsByClassName("row");

// I started just going with this and I figure I better plan instead of just like - going for it.
//Instead of hard-coding rows and scores, I want to create objects that store name and score in local storage.

//a function to create a new column and row for each new player.
let addNewPlayer = () => {
  document.getElementById("addPlayer").onclick = function () {
    console.log("button was clicked");
    var table = document.getElementById("playerTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  };
};
addNewPlayer();
