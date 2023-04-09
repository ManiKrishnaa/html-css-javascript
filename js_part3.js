let n;

document.getElementById("numlabel").onclick = function()
{
	n = document.getElementById("numtext").value;
	n = Number(n);
	if(n%2 == 0)
	{
		document.getElementById("ans").innerHTML = "EVEN";
	}
}