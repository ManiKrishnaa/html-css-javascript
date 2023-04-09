let x = Math.floor(Math.random() * 5);
let y = Math.floor(Math.random() * 5);
let z = Math.floor(Math.random() * 5);

document.getElementById("btn").onclick = function()
{
	document.getElementById("xlabel").innerHTML = x;
	document.getElementById("ylabel").innerHTML = y;
	document.getElementById("zlabel").innerHTML = z;
}