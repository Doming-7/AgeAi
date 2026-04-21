let age;
document.getElementById("myButton").onclick = function () {
  age = document.getElementById("myText").value;
  document.getElementById("myH3").textContent = `You are ${age} years old!`;
};
