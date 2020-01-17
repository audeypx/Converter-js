// For Height

document.getElementById("four-output").style.visibility = "hidden";
document.getElementById("cmInput").addEventListener("input", function(e) {
  document.getElementById("four-output").style.visibility = "visible";
  let cm = e.target.value;
  document.getElementById("mtOutput").innerHTML = cm / 100;
  document.getElementById("ftOutput").innerHTML = cm / 30.48;
  document.getElementById("inOutput").innerHTML = cm /2.54;
});