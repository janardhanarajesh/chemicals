fill=()=>
{
	let solution=document.getElementById('hi').value;
	if(solution=='nacl')
	{


	var jar=document.getElementById('jarin');
	jar.style.background="rgba(255,255,255,0.2)"
	var formula=document.getElementById('formula');
formula.innerHTML="NaCl"
}
else if(solution=="cuso4"){
	var jar=document.getElementById('jarin');
	jar.style.background="royalblue"
var formula=document.getElementById('formula');
formula.innerHTML="CuSo<sub>4</sub>"
}
else if(solution=="hcl"){
	var jar=document.getElementById('jarin');
	jar.style.background="rgba(204, 143, 0,0.1)"
var formula=document.getElementById('formula');
formula.innerHTML="HCl"
}
else if(solution=="h2so4"){
	var jar=document.getElementById('jarin');
	jar.style.background="rgba(204, 143, 0,0.1)"
var formula=document.getElementById('formula');
formula.innerHTML="H<sub>2</sub>SO<sub>4</sub>"
}
else if(solution=="hno3"){
	var jar=document.getElementById('jarin');
	jar.style.background="rgba(204, 143, 0,0.1)"
var formula=document.getElementById('formula');
formula.innerHTML="HNO<sub>3</sub>"
}
else if(solution=="feso4"){
	var jar=document.getElementById('jarin');
	jar.style.background="lightgreen"
var formula=document.getElementById('formula');
formula.innerHTML="FeSO<sub>4</sub>"
}
else if(solution=="ag2so4"){
	var jar=document.getElementById('jarin');
	jar.style.background="#ffffff"
var formula=document.getElementById('formula');
formula.innerHTML="Ag<sub>2</sub>SO<sub>4</sub>"
}
else if(solution=="znso4"){
	var jar=document.getElementById('jarin');
	jar.style.background="rgba(255, 255,255 ,0.1)"
var formula=document.getElementById('formula');
formula.innerHTML="ZnSO<sub>4</sub>"
}
else if(solution=="methyl"){
	var jar=document.getElementById('jarin');
	jar.style.background="orange"
var formula=document.getElementById('formula');
formula.innerHTML="Methyl orange"
}
else if(solution=="permag"){
	var jar=document.getElementById('jarin');
	jar.style.background="purple"
var formula=document.getElementById('formula');
formula.innerHTML="Pottasium Permagnent"
}
else if(solution=="edta"){
	var jar=document.getElementById('jarin');
	jar.style.background="violet"
var formula=document.getElementById('formula');
formula.innerHTML="Edta"
}
else if(solution=="na2so4"){
	var jar=document.getElementById('jarin');
	jar.style.background="white"
var formula=document.getElementById('formula');
formula.innerHTML="Na<sub>2</sub>SO<sub>4</sub>"
}

}
clr=()=>
{
	var jar=document.getElementById('jarin');
	jar.style.backgroundColor=" transparent"
var formula=document.getElementById('formula');
formula.innerHTML=" "
document.getElementById('hi').value="one"
}