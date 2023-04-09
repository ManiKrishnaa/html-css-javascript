
function  fncall()
{
    var txt1 = document.getElementById("t1").value;
    var txt2 = document.getElementById("t2").value;
    var txt3 = txt1+txt2;
    document.getElementById("t3").innerHTML = txt3;
}
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click",fncall);
