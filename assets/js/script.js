let maryCount = 60;
let addPushUpsButton = "<button>Add Push Ups</button>";

// let rows = document.getElementsByClassName("row");

// I started just going with this and I figure I better plan instead of just like - going for it.
//Instead of hard-coding rows and scores, I want to create objects that store name and score in local storage.

//a function to create a new column and row for each new player.
let addNewPlayer = () => {
  document.getElementById("addPlayer").onclick = function () {
    //we made a variable called table to grab the table from the html, and some variables that insert rows and cells into that table
    let table = document.getElementById("playerTable");

    //this is going to always insert at 0; if you want it to be the last it has to be -1
    let row = table.insertRow(-1);
    let player = row.insertCell(-1);

    player.innerHTML =
      "<input id='input1' type='text' value='name'>" + "</input>";
    console.log(table.children);
    console.log(table.children.length);
    console.log(table.children[0].children.length);
    let nameEntry = document.getElementById("input1").value;
    let nameEnter = document.getElementById("input1");
    // nameEnter.addEventListener("keypress", function (event){
    //   if (event.key === "enter") {
    //     console.log("muffin!");
    //   }
    // });

    // function playerName() {
    //   var text = nameEntry;
    //   document.getElementById("input1").value = text;
    // }



    console.log(nameEntry);

    let score = row.insertCell(1);
    score.innerHTML = 0 + " placeholder! ";

    let addPushUps = row.insertCell(2);
    addPushUps.innerHTML = addPushUpsButton;

    //the player's name will have to be an entry by the user

    // addPushUps.addClass();
    //wouldnt it be nice to have onclick the user can add whatever number they want instead of +1?
  };
};
addNewPlayer();

//let's make a for loop based on the children.length!

// let createPlayer = () =>{
//   document.getElementById("addPlayer").onclick = function () {
//   let table = document.getElementById("playerTable");
//   for (let i=0; i < table.children.length; i++){
//     table.insertRow(i);
//     row.insertCell(i);
//   }
// };
// createPlayer();

// ---------------------------- IGNORE THE BELOW!!! ------------------------------------


//so, we wanted to show that if you us .getelementbyclassname but there are no things by that class name, you'll get an empty array. We learned that return will give back the thing you ask for right after 'return', and we learned about the function inside the concole log - instead of console log just the name of the function, it gives me the function, but if i console log invoke the function, it will show me the result of the function in that console.log
// var fakeNews = () => {
//   return document.getElementsByClassName("test");
// };
// // same as above: If you don't use {}, the 1 line function will automatically return.
// // aka if you use {} and need an output/return value, you explicitly have to use the return keyword.
// var fakeNews = () => document.getElementsByClassName("test");

// // what happens if you change the function name from fakeNewz to fakeNews.
// // why does this happen? (hint: its about the let)
// console.log("this is fake newS with an S", fakeNews());
// // console.log('this is fake newZ with a ZZZ', fakeNewz())

// let a = 1;

// function waffles() {
//   let a = 2;
//   console.log(a);
// }
// let wafflez = () => {
//   let a = 3;
//   console.log(a);
// };

// console.log(a);
// waffles();
// wafflez();

//
