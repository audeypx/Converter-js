// For Energy

document.getElementById("two-output").style.visibility = "hidden";
document.getElementById("kjInput").addEventListener("input", function(e) {
  document.getElementById("two-output").style.visibility = "visible";
  let kj = e.target.value;
  document.getElementById("jOutput").innerHTML = kj * 1000;
  document.getElementById("cOutput").innerHTML = kj * 0.239;
  document.getElementById("kcOutput").innerHTML = kj / 4.184;
});
