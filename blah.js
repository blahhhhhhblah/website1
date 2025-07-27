//console.log("hi");
//window.alert("I love you wayyyy moreeee");
let firstname;
document.getElementById("button1").onclick = function(){
    firstname = document.getElementById("input1").value;
    document.getElementById("input1").value = "";
    document.getElementById("love").textContent = "I truly love " + firstname ;
}