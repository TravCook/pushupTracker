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
    //we made a variable called table to grab the table from the html, and some variables that insert rows and cells into that table
    let table = document.getElementById("playerTable");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = "Player Name";
    cell2.innerHTML = "0";
    cell3.innerHTML = "<button>add Push Up</div>";
  };
};
addNewPlayer();

//I would like to add a button for each cell to increase or decrease the score; maybe I shoule make an object?!
