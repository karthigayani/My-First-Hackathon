// <div class="container-sm">100% wide until small breakpoint</div>

let div=document.createElement("div"); 
div.setAttribute("class","main1");

let formgroup=document.createElement("div"); 
formgroup.setAttribute("class","form-group");

let input=document.createElement("input"); 
input.setAttribute("type","text"); 
input.setAttribute("class","form-control"); 
input.setAttribute("id","main"); 
input.setAttribute("placeholder","Type City Name Here"); 
input.style.marginTop="10px";
input.style.width="520px"; 
 
let button=document.createElement("button"); 
button.setAttribute("type","button"); 
button.classList.add("btn","btn-primary"); 
button.innerHTML="Search"; 
button.style.marginLeft="220px"; 
button.style.marginTop="20px";
button.style.backgroundColor="white";
button.style.color="grey"; 
button.addEventListener("click",foo); 
 
let BN = document.createElement("div"); 
BN.setAttribute("id","name"); 
 
let BT = document.createElement("div"); 
BT.setAttribute("id","brewery_type"); 
 
let BA = document.createElement("div"); 
BA.setAttribute("id","street"); 
 
let BURL = document.createElement("div"); 
BURL.setAttribute("id","website_url"); 
 
let BPN = document.createElement("div"); 
BPN.setAttribute("id","phone"); 
 
formgroup.append(input,button); 
div.append(formgroup);
document.body.append(div); 
 
async function foo(){ 

let city=document.getElementById("main").value; 
console.log(city); 
 
let res=await fetch (`https://api.openbrewerydb.org/breweries?by_city=${city}`); 
let res1= await res.json(); 
console.log(res1);
for(var i=0; i<res1.length; i++) {
    try { 
    console.log(res1[i].name); 
    BN.innerHTML=`Brewery Name : ${res1[i].name}`; 
 
    console.log(res1[i].brewery_type); 
    BT.innerHTML=`Brewery Type : ${res1[i].brewery_type}`; 
 
    console.log(res1[i].street); 
    BA.innerHTML=`Brewery Address : ${res1[i].street}`; 
 
    console.log(res1[i].website_url); 
    BURL.innerHTML=`Brewery URL : ${res1[i].website_url}`; 
 
    console.log(res1[i].phone); 
    BPN.innerHTML=`Brewery Phone No. : ${res1[i].phone}`;

    formgroup.append(BN,BT,BA,BURL,BPN); 
    document.body.append(div); 

    }
    catch (error) { 
            return error; 
    } 
  }
} 

