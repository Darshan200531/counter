const dbtn = document.getElementById(`dbtn`);
const rbtn = document.getElementById(`rbtn`);
const ibtn = document.getElementById(`ibtn`);

const countLabel = document.getElementById(`countLabel`);

let count=0;

dbtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

ibtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

rbtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}


let fruits = ["apple","mango","banana"];

for(fruit of fruits) {
    console.log(fruit);
}

 