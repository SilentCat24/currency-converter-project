'use strict';


let id=(id)=>document.getElementById(id);

let currencyOneEl=id('currencyOne'),
currencyTwoEl=id('currencyTwo'),
amountOneEl=id('amountOne'),
amountTwoEl=id('amountTwo');



// functions
const calculate=function(){
  const currencyOne=currencyOneEl.value;
  const currencyTwo=currencyTwoEl.value;

 const url=`https://open.er-api.com/v6/latest/${currencyOne}`;

 fetch(url)
 .then((res)=>res.json())
 .then((data)=>{
  const rate= data.rates[currencyTwo];
amountTwoEl.value=((amountOneEl.value)*rate).toFixed(2);
 });
}




// event listener
currencyOneEl.addEventListener('change',calculate);

amountOneEl.addEventListener('input',calculate);

currencyTwoEl.addEventListener('change',calculate);

amountTwoEl.addEventListener('input',calculate);


//intial settings

calculate();