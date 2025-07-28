//console.log("hi");
//window.alert("I love you wayyyy moreeee");
let firstname;
document.getElementById("button1").onclick = function(){
    firstname = document.getElementById("input1").value;
    if (firstname == "Maya"){
        document.getElementById("love").textContent = "I truly love " + firstname ;

    }
    else if (firstname == "maya"){
         document.getElementById("love").textContent = "I truly love " + firstname ;
    }
    else{
        document.getElementById("love").textContent = "Incorrect name entered";
    }
    document.getElementById("input1").value = "";
   
}
