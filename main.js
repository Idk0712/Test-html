let count = 0;
let User = ""; 

document.getElementById("decreasebut").onclick = function(){
    count-=1;
    document.getElementById("Counting").innerHTML = count;
};

document.getElementById("resetbut").onclick = function(){
    count=0;
    document.getElementById("Counting").innerHTML = count;
};

document.getElementById("increasebut").onclick = function(){
    count+=1;
    document.getElementById("Counting").innerHTML = count;
};
