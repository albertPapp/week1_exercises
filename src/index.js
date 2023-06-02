import "./styles.css";

function printThis() {
  console.log("hello world");
  document.getElementById("header").innerHTML = "My notebook";
}

document.getElementById("my-button").onclick = printThis;

const addDataButton = document.getElementById("add-data");
addDataButton.addEventListener("click", function () {
  let newList = document.createElement("li");
  newList.innerText = document.getElementById("text-area").value;

  document.getElementById("list").appendChild(newList);
});

document.getElementById("app").innerHTML = `


`;
