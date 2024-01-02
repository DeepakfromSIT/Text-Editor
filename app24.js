let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
  console.log("inp.value");
  p.innerText = inp.value;

  p.style.backgroundColor = "orange";
  p.style.fontSize = "30px";
});
