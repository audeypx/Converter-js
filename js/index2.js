// For Temperature

document.getElementById("three-output").style.visibility = "hidden";
document.getElementById("csInput").addEventListener("input", function(e) {
  document.getElementById("three-output").style.visibility = "visible";
  let cs = e.target.value;
  document.getElementById("fhOutput").innerHTML = cs * 9/5 + 32 ;
  document.getElementById("kOutput").innerHTML = cs *1 + 273.15;
  document.getElementById("rnOutput").innerHTML = cs * 9/5 + 491.67;
});